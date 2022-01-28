// refs to html elements
const dialogue = document.getElementById('dialogue')
const truechara = document.getElementById('truechara')

// character and line tracking
let i = 0
let line = ''

// get the state of persistence
function persistGet() {
	let loadCount = parseInt(localStorage.charaLoaded)
	if (isNaN(loadCount)) { loadCount = 0 }
	loadCount++
	localStorage.charaLoaded = loadCount.toString()
	
	return loadCount
}

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
			case '^':
				// show normal chara
				truechara.src = '../images/truechara.webp'
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

line = 'Interesting.*You visit me not through a browser, but your package manager?*I am not your servant.*I will not read a depiction for you.*$So why don\'t you get Saily instead?^~'
charaText()