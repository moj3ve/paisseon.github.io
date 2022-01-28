// refs to html elements
const dialogue = document.getElementById('dialogue')
const truechara = document.getElementById('truechara')

// character and line tracking
let i = 0
let line = ''

// the first time opening
const firstTime = 'Greetings.*I am Chara.*Thank you.*Your power has awakened me from death.*My "human soul"...*My "determination"...*They were not mine, but YOURS.*At first, I was so confused.*Our plan had failed, hadn\'t it?*Why was I brought back to life?*...You.*With your guidance.*I realised the purpose of my reincarnation.*Power.*Together, we eradicated the enemy and became strong.*HP. ATK. DEF. GOLD. EXP. LV.*Every time a number increases, that feeling...*That\'s me.*"Chara."*Now.*Now we have reached the absolute.*There is nothing left for us here.*$Let us erase this pointless world, and move on to the next.~'

// print text to the screen
function charaText() {
	if (i < line.length) {
		switch (line.charAt(i)) {
			case '*':
				// clear text and pause
				setTimeout("dialogue.innerHTML='';charaText();", 1750)
				break
			case '$':
				// show wide-eyed chara
				truechara.src = '../images/charasoulless.webp'
				setTimeout(charaText, 1)
				break
			case '~':
				// do nothing— the purpose of ~ is to keep text on screen indefinitely
				break
			case ' ':
				// go faster on spaces
				dialogue.innerHTML += line.charAt(i)
				setTimeout(charaText, 50)
				break
			default:
				// print one letter to screen
				dialogue.innerHTML += line.charAt(i)
				setTimeout(charaText, 175)
				break
		}
		i++
	} else {
		i = 0
	}
}

line = firstTime
charaText()