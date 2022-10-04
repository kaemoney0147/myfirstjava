let spaghetti= 400
let guanciale= 250
let eggYokls= 6
let percorionRomano= 50
let blackPepper= 4
//first cut the guanciale into 1cm layers, then into long strips.
//Combine the egg yolks with the finely grated Pecorino Romano.
let combineEggyork= eggYokls + percorionRomano
//Roast the black pepper on a pan until it smokes and sizzles, and combine a small amount of it to the yolks and chees mixture, set aside the rest.
let pepper= blackPepper/4
let allPepper= blackPepper/4*3
let combineYorkRosastPepper= combineEggyork +pepper
console.log('weight of eggYokls, cheese and pepper:',combineYorkRosastPepper)
//3 pepper left
let combineGuanciapasta= guanciale + spaghetti
let combinePastSauce= combineGuanciapasta + combineYorkRosastPepper
console.log('weight of combine spaghetti and guanciale:',combinePastSauce)
//adding the remaining  black pepper
let addBlackPepper= combinePastSauce + allPepper
console.log('Total meal weight will be:',addBlackPepper)
