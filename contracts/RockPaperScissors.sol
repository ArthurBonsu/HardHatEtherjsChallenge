
pragma solidity 0.8.2;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import '../contracts/libraries/StringUtils.sol';



  // @dev contract for rock,paper game0
contract RockPaperScissors is    Ownable,ERC20 {
    
    
    string constant   rock = "rock" ;
    string constant  paper = "paper";
    string constant  scissors = "scissors";
    bool   rockchosen = false;
    bool   scissorschosen = false;
    bool   paperchosen = false;
    string choicemade;
    bool   setprevwinnings = false;
    uint   public prev_gamestaked;
    string private _tokenname ="RPSTOKENS";
    string private _tokensymbol= "RPS";
    address public _owner;
    uint randNonce =0;
    uint modulus =0;
    uint _payfee=0;
    uint maxWaitTime = 100;
         
  
       struct Game {
             uint  gameid; 
             uint256 gamecount;
             }

       struct Players {
              address payable playeraddress;
              string playername;
              uint256 playerscore;
              uint256 playerbalance;
              }
       
       struct PlayingGame{
            uint playinggameid;
            address payable playerininaddress;
            bool gameover;    
            uint256 gamescore; 
            uint256 playerscount;
            uint duration;
            }

    
    uint256 public totalsupplytokens = 1000000;
     
   
    mapping(address => uint256) balances;
    mapping(address => mapping(bytes32 => bool)) playeringamecheck;
    mapping(uint => mapping(address => uint)) prev_winning;
    mapping(uint => mapping(address => uint)) gamewithplayer;     
    mapping(uint => uint) gamesplayed;
    mapping(address => address) playersplayed;
    mapping(address => bool)paidforgames;
      

       mapping(uint=>Game) public _games;
       mapping(address=>Players)public _playerstore;
       mapping(uint=>PlayingGame) public _playinggames;

  
  // @dev objects inheriting from previous structs
   Game  newgame;
   Players  newplayerregistered;
   PlayingGame  playerinthegame;
    

   
    Game[] public gamesregistered;
    Players[] public playersregistered;
   PlayingGame[] public gameinplay;
     
    
      
      constructor(address __owner) ERC20(_tokenname, _tokensymbol ) {
        _owner =__owner;
        
         totalSupply();
         

    }

  

  // @dev fees to be paid to be registered for game 
  // @params player=sender, contractowner,ether amount to be sent 
  
function payfee(address payable sender, address payable owneraddress, uint256 amount) public payable returns(bool, bytes memory){
        
         _owner =owneraddress;
        _payfee = amount;
     
        require ( amount >= 10, "Amount not enough to play!");
    
          (bool success,bytes memory data ) = _owner.call{value: _payfee}("");
            require(success, "Check the amount sent as well"); 
             paidforgames[sender]= true;
    return (success,data);
    }

   // @dev registeration for game  
  // @params players name and address
  
    function registerplayername(string memory _playername, address payable _playeraddress) public  returns(string memory, address){
         
              require(msg.sender == _owner , "Caller is not owner");
         
               if (paidforgames[_playeraddress] == true){
            uint256 playerbalance =0;
            playerbalance = balanceOf(_playeraddress);

           if(playersplayed[_playeraddress] != _playeraddress){
           
            playersplayed[_playeraddress] =_playeraddress ;
           
            // @dev storing to memory
            newplayerregistered = Players(_playeraddress,_playername, 0,playerbalance ); 
             _playerstore[_playeraddress].playeraddress = _playeraddress;
             _playerstore[_playeraddress].playername = _playername;
             _playerstore[_playeraddress].playerscore = 0;
             _playerstore[_playeraddress].playerbalance = playerbalance;
               
                
                 // @dev storing to storage  -optional
  
  
            playersregistered.push(newplayerregistered);                        

            return (_playername,_playeraddress );
     
}
}
    }

    
      // @dev register game, game id as random generator integer
    function registergame(uint _gameid) external  returns(uint){
                uint256 i =0;
                i++;
           require(msg.sender == _owner , "Caller is not owner");
    
             uint256 gamecount = 0;
         
            if(gamesplayed[_gameid] != _gameid){
           
             gamesplayed[_gameid] = _gameid;
              newgame = Game(_gameid,gamecount );

              // Store into memory 
                _games[_gameid].gameid = _gameid;
                _games[_gameid].gamecount = i;
                
             
              gamesregistered.push(newgame);
              return (_gameid);
             }
         
    }



            
        // @dev set both player and game
    function setplayinggame(uint _gameid, address payable playersaddress) internal returns(uint, address) {
           uint _playerscount =0;
           _playerscount++;
          
       require(msg.sender == _owner , "Caller is not owner");
         uint __gameid =0;
         __gameid = _gameid;
         randNonce++; 
         modulus= 3;
        __gameid = uint(keccak256(abi.encodePacked(block.timestamp,
                                          msg.sender,
                                          randNonce))) % 
                                          modulus; 
         require(msg.sender == _owner, "Caller is not owner");
         
              
        // @dev access control for registration of game and player
         require( _playinggames[_gameid].playerscount < 2 == true, "Only two players can play");       
         require(gamewithplayer[_gameid][playersaddress] != __gameid, "Player already is set in game");      
        
          gamewithplayer[_gameid][playersaddress] = __gameid;
          uint _duration = block.number + maxWaitTime;
         playerinthegame = PlayingGame(_gameid, playersaddress, false, 0,0, _duration);
        
                
               
         _playinggames[_gameid].playinggameid = _gameid;
        _playinggames[_gameid].playerininaddress = playersaddress;
        _playinggames[_gameid].gameover = false;
        _playinggames[_gameid].gamescore = 0;
        _playinggames[_gameid].playerscount = _playerscount;
        _playinggames[_gameid].duration = _duration;
       
         gameinplay.push(playerinthegame);
 
       return(_gameid, playersaddress);  
       }
      // @dev several checks before game
    function _checkplayerregistered(address payable _playeraddress) public returns (bool ) {
              require(playersplayed[_playeraddress] == _playeraddress );
              return(true);
        }
        function _checkgameregistered(uint _gameid) public returns (bool) {
            require(gamesplayed[_gameid]== _gameid);
            return(true);
        } 

        function _checkplayeringame(uint  _gameid,address _playeraddress ) public returns (bool){
            require( gamewithplayer[_gameid][_playeraddress] == _gameid );
             return (true);
        }
  // @dev triggers for choice selections
    function selectRock( ) public virtual  returns(bool)
   { 
     
     if (rockchosen){
          rockchosen = true;
           return (rockchosen); 
     }else{
        rockchosen = false;
         return (rockchosen);
     }         
       
     }

    function selectPaper() public virtual  returns(bool)
     { if (paperchosen){
          paperchosen = true; 
           return (paperchosen);
     }else{
        paperchosen = false;
         return (paperchosen);
     }         
      
     }
    function selectScissors(  ) public virtual  returns(bool){
     if (scissorschosen){
          scissorschosen = true;
          return (scissorschosen); 
     }else{
        scissorschosen = false;
        return (scissorschosen);
     }         
       
     }
      
      // @dev function for staking previous winnings in game
    function stakeprevwinnings( ) public virtual  returns(bool) {
         if(setprevwinnings) {
           setprevwinnings =true;
         }else{
           setprevwinnings =false;
         }
    
   
    return (setprevwinnings);
    }
 // @dev function for choosing which game to stake
   function choosegametostake(uint game_id,address payable _playeraddress ) public virtual   returns(uint256){
    prev_gamestaked =game_id;
     if (stakeprevwinnings( ) ==true ){
      uint256 winnings =0;
     winnings  =    prev_winning[prev_gamestaked][_playeraddress];
     transfer(_owner, winnings);
     return( winnings);
    }
    }
   
    
   event eventplaygame(uint  _eventgameid, address payable _eventtheplayeraddress, string   _eventchoicemade);
   
   // @dev function for overall game play and storing values in respective arrays
   function playgame(uint _gameid, address payable _theplayeraddress, string memory _choicemade ) internal returns(string memory, address, string memory){
       
     
       require(msg.sender == _owner , "Caller is not owner");
       _checkplayerregistered(_theplayeraddress);
       _checkgameregistered( _gameid);
       _checkplayeringame( _gameid ,_theplayeraddress ); 
       choosegametostake(prev_gamestaked, _theplayeraddress );
       
       for (uint i=0; i<2; i++){  
        
           choicemade = _choicemade;
            if (selectRock() == true ){
               scissorschosen = false;
                paperchosen = false;
          
             choicemade = "rock" ;
             }
           if (selectPaper()== true ){
              rockchosen = false;
              scissorschosen = false;
           
             choicemade = "paper" ;
             }
             
            if (selectScissors()== true ){
            rockchosen =false;
           paperchosen =false;
             choicemade = "scissors" ;
             }
             continue; 

           

   string[] memory choices;
     choices[0] ="rock";
     choices[1]="paper";
     choices[2]="scissors";
    
        
        uint shuffler = 0;
        shuffler= 3;
        uint _gameindex = 0;
         randNonce++; 
        _gameindex =   uint(keccak256(abi.encodePacked(block.timestamp,
                                          msg.sender,
                                          randNonce))) % 
                                          shuffler; 
      
    string memory choice = choices[_gameindex];  
    
      
    if (StringUtils.equal(choicemade, choice)== true ){
     
        approve( _theplayeraddress, 10000);
        transfer(_theplayeraddress,10000);
       
          balanceOf(_theplayeraddress);
          newplayerregistered.playeraddress =_theplayeraddress;
       prev_winning[_gameid][_theplayeraddress] =10000; 

     
       _playerstore[_theplayeraddress].playerscore +=5;  
    }        
  
  emit eventplaygame( _gameid, _theplayeraddress,  _choicemade);
    }
    
    }
     
     // @dev various ERC20  token functions inherited from ERC contract,
     // functions set as virtual
     function totalSupply() public view virtual override  returns (uint256) {
        return totalsupplytokens;
    }
   
 function balanceOf(address account) public view override  returns (uint256) {
        return balances[account];
    }
  
 function owner() public view virtual override returns (address) {
        return _owner;
    }

}