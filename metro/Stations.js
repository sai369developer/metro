const stations = [
  "lb nagar",//0
  "victoria memorial",//1
  "chaitanyapuri",//2
  "dilsukhnagar",//3
  "musarambagh",//4
  "new market",
  "malakpet",
  "mg bus station",//7
  "osmania mediacal college",
  "gandhi bhavan",
  "nampally",
  "assembly",
  "lakdikapul",
  "khairatabad",
  "irrum manzil",
  "punjagutta",
  "ameerpet",
  "sr nagar",
  "esi hospital",
  "erragadda",
  "bharat nagar",
  "moosapet",
  "balanagar",
  "kukatpally",
  "kphb",
  "jntu",
  "miyapur",
  "sultan bazaar",//27
  "narayanaguda",
  "chikkadpally",
  "rtc x roads",
  "musheerabad",
  "gandhi hospital",
  "secunderabad west",
  "parade ground",//34
  "nagole",
  "uppal",
  "stadium",
  "ngri",
  "habsiguda",
  "tarnaka",
  "mettuguda",
  "secunderabad east",//42
  "paradise",
  "rasoolpura",
  "prakash nagar",
  "begumpet",
  "madhura nagar",
  "yusufguda",
  "jubilee hills",
  "jubilee hills checkpost",
  "peddamma gudi",
  "madhapur",
  "durgam cheruvu",
  "hitec city",
  "raidurg",
];

const adjacencyList = [
  [1],        //lb nagar   
  [0, 2],     //  victoria memorial        
  [1,3],       //  chaitanyapuri       
  [2, 4],       //   dilsukhnagar     
  [3, 5],         //   musarambagh  
  [4, 6],         //    new market   
  [5, 7],          //    malakpet
  [6, 27, 8],       //    mg bus station
  [7, 9],              
  [8, 10],               
  [9, 11],              
  [10, 12],               
  [11, 13],               
  [12, 14],               
  [13, 15],             
  [14, 16],             
  [15, 46,47,17],             
  [16, 18],             
  [17, 19],              
  [18, 20],             
  [19, 21],              
  [20, 22],              
  [21, 23],              
  [22, 24],              
  [23, 25],             
  [24, 26],            
  [25],              
  [7,28],             
  [27, 29],              
  [28, 30],             
  [29, 31],              
  [30, 32],             
  [31, 33],             
  [32, 34],             
  [33, 42,43],            
  [36],              
  [35,37],             
  [36, 38],             
  [37, 39],              
  [38, 40], 
  [39, 41],
  [40, 42],
  [41, 34],             
  [34, 44],              
  [43, 45],             
  [44, 46],              
  [45, 16],             
  [16, 48],             
  [47, 49],             
  [48, 50],              
  [49, 51],           
  [50, 52],             
  [51, 53],
  [52, 54],     
  [53, 55],          
  [54]              
]
  
