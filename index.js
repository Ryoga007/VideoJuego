import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

kaboom({
    background: [0, 0, 0],
    width:1700,
    height:900,
	canvas: document.getElementById('game'),
})
// *Cargando imagenes estaticas
loadSprite('imgFondoEscena0', 'assets/sprites/wallpaperbetter.jpg')
loadSprite('imgFondoEscena1', 'assets/sprites/wallpaperbetter1.jpg')
loadSprite('imgFondoEscena2', 'assets/sprites/wallpaperbetter1.jpg')
loadSprite('imgIntroLinia', 'assets/sprites/Linia.png')
loadSprite('imgDocente', 'assets/sprites/docente.png')
loadSprite('mapa0','assets/sprites/mapaAset01.png')
loadSprite('mapa1','assets/sprites/Mapa2.png')
loadSprite('block', 'assets/sprites/bean.png' )
loadSprite('block1', 'assets/sprites/block.png' )
loadSprite('cebra', 'assets/sprites/cono.png')
loadSprite('logoUsfa', 'assets/sprites/LogoUsfa.png')
loadSprite('nivel0', 'assets/sprites/Nivel0.png')
loadSprite('nivel1', 'assets/sprites/Nivel1.png')
loadSprite('menu1', 'assets/sprites/Menu1.png')
loadSprite('Marco', 'assets/sprites/Marco.png')
loadSprite('key', 'assets/sprites/Bandera.png')
loadSprite('door', 'assets/sprites/Bandera2.png')



// *Cargamos sonido

// *Caragando imagenes con movimiento
loadSpriteAtlas('assets/sprites/AutoSet01t.png', {
    hero: {
      x: 1,
      y: 1,
      width: 64,
      height: 32,
      sliceX: 2,
      anims: {
        run: { from: 0, to: 1, loop: true, speed: 5 }
      },  
    },
	hero2: {
		x: 64,
		y: 1,
		width: 64,
		height: 32,
		sliceX: 2,
		anims: {
		  run: { from: 0, to: 1, loop: true, speed: 5 }
		},  
	  },
	hero3: {
		x: 1,
		y: 32,
		width: 64,
		height: 32,
		sliceX: 2,
		anims: {
		  run: { from: 0, to: 1, loop: true, speed: 5 }
		},
	},
	hero4: {
		x: 64,
		y: 32,
		width: 64,
		height: 32,
		sliceX: 2,
		anims: {
		  run: { from: 0, to: 1, loop: true, speed: 5 }
		},
	}
	
})
loadSpriteAtlas('assets/sprites/AutoSet02.png', {
	bot: {
		x: 1,
		y: 1,
		width: 206,
		height: 88,
		sliceX: 2,
		anims: {
		run: { from: 0, to: 1, loop: true, speed: 5 }
		}
	},
})
loadSpriteAtlas('assets/sprites/Semaforo.png', {
	amarillo1: {
		x: 1,
		y: 1,
		width: 112,
		height: 255,
		// sliceX: 2,
		// anims: {
		// run: { from: 0, to: 1, loop: true, speed: 5 }
		// }
	},
	amarillo2: {
		x: 112,
		y: 1,
		width: 112,
		height: 255,
		// sliceX: 2,
		// anims: {
		// run: { from: 0, to: 1, loop: true, speed: 5 }
		// }
	},
	rojo1: {
		x: 224,
		y: 1,
		width: 112,
		height: 255,
		// sliceX: 2,
		// anims: {
		// run: { from: 0, to: 1, loop: true, speed: 5 }
		// }
	},
	rojo2: {
		x: 336,
		y: 1,
		width: 112,
		height: 255,
		// sliceX: 2,
		// anims: {
		// run: { from: 0, to: 1, loop: true, speed: 5 }
		// }
	},
	verde1: {
		x: 448,
		y: 1,
		width: 112,
		height: 255,
		// sliceX: 2,
		// anims: {
		// run: { from: 0, to: 1, loop: true, speed: 5 }
		// }
	},
	verde2: {
		x: 560,
		y: 1,
		width: 112,
		height: 255,
		// sliceX: 2,
		// anims: {
		// run: { from: 0, to: 1, loop: true, speed: 5 }
		// }
	},
})

// *Declarando las Variables
// const music = play('musicaFondo', {loop: true, volume: 1})
var linea;
var marco;
var menu2;
var nivel;
var opcionMenu = 1;
var opcionMenu2 = 1;
var playerPos = (0,0);
var sumaTiempo= 0;
var vidaJuego = 7;
var score = 0;
var colicion = true;
var colicionTiempo = 0;
var scaleMap;

  

// * Iniciando las escenas de incio

scene('credits-0', () => {
    wait(1, () => {
        focus()
        add([  
          text('presiona ESPACIADOR para comenzar', {
            size: 28,
            font: 'apl386'
          }),
          pos(width()/2, height()/2),
          origin('center')
        ]);
      })
    
      onKeyPress('space', () => {
        go('credits-1')
      })
})

scene('credits-1', () => {
	add([
		sprite('imgFondoEscena0')
	])

  wait(1, () => {
    add([
      sprite('logoUsfa'),
      pos(width()/2, height()/4),
      scale(0.5),
      origin('center')
    ])
  })

	wait(3, () => {
	  add([  
		text('Proyecto de grado', {
		  size: 50,
		  font: 'apl386'
		}),
		pos(width()/2, height()/2),
    color(27, 38, 49),
		origin('center')
	  ]);
	})
  
	wait(5, () => {
	  add([
		pos(width()/2, (height() - (height()*0.4))),
		sprite("hero", {anim: 'run'}),
		rotate(0),
		area(),
		origin('center'),
		scale(5),
		cleanup()
	  ])
	})
  
	wait(8, () => {
	  go('menu')
	})
})

// * Esla ecena del selecion de menu
scene('menu', () => {
	add([
		sprite('imgFondoEscena1')
	]),
	wait(1, () => {
		add([
			text('Iniciar Juego', {
			  size: 45,
			  font: 'apl386'
			}),
			pos(width()/2, 250),
			origin('center')
		]);
	}),
	wait(2, () => {
		add([
			text('Instrucciones', {
			  size: 45,
			  font: 'apl386'
			}),
			pos(width()/2, 400),
			origin('center')
		]);
	}),
	wait(3, () => {
		add([
			text('Salir de juego', {
			  size: 45,
			  font: 'apl386'
			}),
			pos(width()/2, 550),
			origin('center')
		]);
	})

	wait(4, () => {
		linea = add([
			sprite('imgIntroLinia'),
			pos(width()/2, 280),
			origin('center')
		]);

		onKeyPress("enter", () => {
			switch (opcionMenu) {
				case 1:
					// music.stop(),
					go("main",0)
					break;
				case 2:
					go("informacion")
					break;
				default:
					go('credits-0')
					break;
			}
		})

		onKeyPress("down", () => {

			switch (opcionMenu) {
				case 1:
					linea.destroy();
					linea = add([
						sprite('imgIntroLinia'),
						pos(width()/2, 430),
						origin('center')
					]);
					opcionMenu = 2;
					break;
				case 2:
					linea.destroy();
					linea = add([
						sprite('imgIntroLinia'),
						pos(width()/2, 580),
						origin('center')
					]);
					opcionMenu = 3;
					break;
				default:
					linea.destroy();
					linea = add([
						sprite('imgIntroLinia'),
						pos(width()/2, 280),
						origin('center')
					]);
					opcionMenu = 1;
					break;
			}
		})
	
		onKeyPress("up", () => {
	
			switch (opcionMenu) {
				case 1:
					linea.destroy();
					linea = add([
						sprite('imgIntroLinia'),
						pos(width()/2, 580),
						origin('center')
					]);
					opcionMenu = 3;
					break;
				case 2:
					linea.destroy();
					linea = add([
						sprite('imgIntroLinia'),
						pos(width()/2, 280),
						origin('center')
					]);
					opcionMenu = 1;
					break;
				default:
					linea.destroy();
					linea = add([
						sprite('imgIntroLinia'),
						pos(width()/2, 430),
						origin('center')
					]);
					opcionMenu = 2;
					break;
			}
		})
	})
}),

scene("informacion", () => {
	add([
		sprite('imgFondoEscena2')
	]),
    
    wait(1, () => {
        add([
			pos(width()/1.7, height()/2),
			rect(1140, 690),
			color(83, 39, 56),
            origin('center')
			// z(100),
		])
		add([
			pos(width()/1.7, height()/2),
			rect(1100, 650),
			color(244, 246, 247),
            origin('center')
			// z(100),
		])
	})

    wait(2, () => {
		add([
			text('Instrucciones\ndel Juego ', {
			  size: 60,
			  font: 'apl386',
			}),
			color(23, 32, 42),
			pos(width()/1.7, height()/6),
			origin('center')
		])
	})

    wait(3, () => {
		add([
			sprite('imgDocente'),
			pos(width()/4, height()/2),
            scale(0.8),
			origin('center')
		])
	})

	wait(9, () => {
		add([
		  text('precione ESPACIADOR para continuar', {
			size: 22,
			font: 'apl386'
		  }),
		  pos(width()/2, height() - (height()*0.1)),
		  origin('center')
		]);
	})
	  
	onKeyPress("space", () => {
		go("menu")
	});
})
// !--------------------------------------------------------------------------------------------------------
// *Empieza el Juego

scene("main", (levelIdx) => {
	
	switch (levelIdx) {
		case 0:
			scaleMap = 4
			break;
		default:
			scaleMap = 2
			break;
	}

	// * Empesacos a CARGAR la pagina con el 'mapa' y la musica de fondo
	add([
		sprite('mapa'+levelIdx),
		scale(scaleMap)
	])
	
	// const music = play("musicaFondo", {
	// 	volume: 0.5,
	// 	loop: true
	// })

	
	const SPEED = 320

	const characters = { 
		"a": {
			sprite: "cebra",  //!Cambio "bag" por "cebra"
			msg: "Recuerda estar atento a los Semaforos",
		},
		// "b": {
		// 	sprite: "ghosty",
		// 	msg: "get out!",
		// },
	}


	const levels = [
		[
			" 	  =====       ====",    
			"    =     =     =    =",
			" ====     =======    ======================================================",
			" =                                                                        =",
			" =  @      +                                                              =",
			" =                                                                        =",
			" =         +                                                              =",
			" =                                                                   -    =",
			" ====     ===========     ===========     ============    ============    =",
			"    =+  + =         =+  + =         =+  + =          =+  +=          =    =",
			"    =     =         =     =         =     =          =    =          =    =",
			"    =     =         =     =         =     =          =    =          =    =",
			"    =     =         =     =         =     =          =    =          =    =",
			"    =     =         =     =         =     =          =    =          =    =",
			"    =     =         =     =         =     =          =    =          =    =",
			"    =     =         =     =         =     =          =    =          =    =",
			"    =     =         =     =         =     =          =    =          =    =",
			" ====     ===========     ===========     ============    ============    =",
			" =                                                                        =",
			" =         +               +               +               +              =",
			" =                                                                        =",
			" =         +               +               +               +              =",
			" =                                                                        =",
			" ====     ===========     ===========     ============    ============    =",
			"    =     =         =     =         =     =          =    =          =    =",
			"    =     =         =     =         =     =          =    =          =    =",
			"    =     =         =     =         =     =          =    =          =    =",
			"    =|    =         =     =         =     =          =    =          = $  =",
			"    =     =         =     =         =     =          =    =          =    =",
			"    =======         =======         =======          ======          =====",
		],
		[
			" ",    
			"     =     =",
			" ====      =================================================================================",
			" =          +                                                                      -   =",
			" =  |              $                                                                    =",
			" =                                                                                     =",
			" =  @       +                                                                          =",
			" =                                                                                     =",
			" =          +                                                                          =",
			" ====     =============      =============      ==============      ==============   =",
			"    =     =           =      =           =      =            =      =            =   =",
			"    =     =           =      =           =      =            =      =            =   =",
			"    =     =           =      =           =      =            =      =            =   =",
			"    =     =           =      =           =      =            =      =            =   =",
			"    =     =           =      =           =      =            =      =            =   =",
			"    =     =           =      =           =      =            =      =            =   =",
			"    =     =           =      =           =      =            =      =            =   =",
			"    =     =           =      =           =      =            =      =            =   =",
			"    =     =           =      =           =      =            =      =            =   =",
			"    =     =           =      =           =      =            =      =            =   =",
			" ====     =============      =============      ==============      ==============   =",
			" =                                                                                     =",
			" =                                                                                     =",
			" =                                                                                     =",
			" =                                                                                     =",
			" =                                                                                     =",
			" =                                                                                     =",
			" ====       =============      =============      ==============      ==============   =",
			"    =       =           =      =           =      =            =      =            =   =",
			"    =       =           =      =           =      =            =      =            =   =",
			"    =       =           =      =           =      =            =      =            =   =",
			"    =       =           =      =           =      =            =      =            =   =",
			"    =       =           =      =           =      =            =      =            =   =",
			"    =       =           =      =           =      =            =      =            =   =",
			"    =========           ========           ========            ========            =====",
		],
	]
	
	wait(1, () => {
		nivel=add([
			sprite('nivel'+levelIdx),
			pos(width()/2,height()/2),
			origin('center')
		])
	})

	wait(3, () => {
	nivel.destroy()
	
	addLevel(levels[levelIdx], {
		width: 43.5,
		height: 43.5,
		// pos: vec2(64, 64),
		"=": () => [
			sprite("block"), //!cambiando "grass" por "block"
			area(),
			solid(),
			origin("center"),
			"block"
		],
		"+": () => [
			sprite("block1"),
			area(),
			// solid(),
			// move(LEFT, 40),
			scale(3),
			// cleanup(30),
			"block1"
			
		],
		"-": () => [
			sprite("bot",{anim: 'run'}),
			area(),
			solid( ),
			move(LEFT,40),
			scale(0.8),
			cleanup(30),
			origin("center"),
			"player2"
			
		],
		"$": () => [
			sprite("key"),
			scale(0.2),
			area(),
			origin("center"),
			"key",
		],
		"@": () => [
			sprite("hero"), //!cambiando "bean" por "hero"
			area(),
			solid(),
			scale(3),
			origin("center"),
			"player",
		],
		"|": () => [
			sprite("door"),
			area(),
			solid(),
			scale(0.15),
			"door",
		],

		any(ch) {
			const char = characters[ch]
			if (char) {
				return [
					sprite(char.sprite),
					area(),
					// solid(),
					"character",
					{ msg: char.msg, },
				]
			}
		},
	})

	const player2 = get("player2")[0]
	const player = get("player")[0]
	player.play("run")
	player.flipX(true)

	
	var semaforo = add([
		sprite('amarillo1'),
		pos(265,365),
		scale(0.3)
	])

	var semaforo1 = add([
		sprite('amarillo1'),
		pos(470,180),
		scale(0.3)
	])

	var semaforo2 = add([
		sprite('amarillo1'),
		pos(985,365),
		scale(0.3)
	])

	var semaforo3 = add([
		sprite('amarillo1'),
		pos(470,830),
		scale(0.3)
	])
	var semaforo4 = add([
		sprite('amarillo1'),
		pos(1680,365),
		scale(0.3)
	])

	var semaforo5 = add([
		sprite('amarillo1'),
		pos(2390,365),
		scale(0.3)
	])

	var semaforo6 = add([
		sprite('amarillo1'),
		pos(1168,830),
		scale(0.3)
	])

	var semaforo7 = add([
		sprite('amarillo1'),
		pos(1880,830),
		scale(0.3)
	])

	var semaforo8 = add([
		sprite('amarillo1'),
		pos(2585,830),
		scale(0.3)
	])

	player.onUpdate(() => {

		if (player.pos.x < 848) {
			if (player.pos.y < 448) {
				camPos(848,448)		
			} else if (player.pos.y > 836) {
				camPos(848,836)		
			}else {
				camPos(848,player.pos.y)
			}
				
		}
		else if (player.pos.x > 2350) {
			if (player.pos.y < 448) {
				camPos(2350,448)		
			} else if (player.pos.y > 836) {
				camPos(2350,836)		
			}else {
				camPos(2350,player.pos.y)
			}
		} else {
			if (player.pos.y <= 448) {
				camPos(player.pos.x, 448)		
			} else if (player.pos.y >= 836) {
				camPos(player.pos.x, 836)		
			}else {
				camPos(player.pos)
			}
		}
		playerPos = camPos()
	})

	function addDialog() {
		const h = 160
		const pad = 16
		const bg = add([
			pos(0, height() - h),
			rect(width(), h),
			color(0, 0, 0),
			z(100),
		])
		const txt = add([
			text("", {
				width: width(),
			}),
			pos(0 + pad, height() - h + pad),
			z(100),
		])
		bg.hidden = true
		txt.hidden = true
		return {
			say(t) {
				txt.text = t
				bg.hidden = false
				txt.hidden = false
			},
			dismiss() {
				if (!this.active()) {
					return
				}
				txt.text = ""
				bg.hidden = true
				txt.hidden = true
			},
			active() {
				return !bg.hidden
			},
			destroy() {
				bg.destroy()
				txt.destroy()
			},
		}
	}
	
	let hasKey = false
	const dialog = addDialog()

	const scoreLabel = add([
		text(score,  {
			size: 80,
		  	}),
	])
	const vidaJuegoLabel = add([
		text(vidaJuego,  {
			size: 80,
		  	}),
	])

	onUpdate(() => {
		if (!colicion) {
			colicionTiempo++
			if (colicionTiempo > 20) {
				colicion = true
				colicionTiempo = 0
			}
		}
		score++
		// scoreLabel.text = score
		// *combertir segundos en horas
			var hour = Math.floor(score / 3600);
			hour = (hour < 10)? '0' + hour : hour;
			var minute = Math.floor((score / 60) % 60);
			minute = (minute < 10)? '0' + minute : minute;
			var second = score % 60;
			second = (second < 10)? '0' + second : second;
			scoreLabel.text = hour + ':' + minute + ':' + second
		// *Posicionando el cronometro
			scoreLabel.pos = (camPos())
			vidaJuegoLabel.pos = (player.pos)
			vidaJuegoLabel.origin = ("botright")
		// *permitieno que el semaforo empieze a funcionar
		if (sumaTiempo < 50) {
			semaforo.use(sprite('amarillo1'))	
			semaforo1.use(sprite('amarillo1'))	
			semaforo2.use(sprite('amarillo1'))	
			semaforo3.use(sprite('amarillo1'))	
			semaforo4.use(sprite('amarillo1'))	
			semaforo5.use(sprite('amarillo1'))	
			semaforo6.use(sprite('amarillo1'))	
			semaforo7.use(sprite('amarillo1'))	
			semaforo8.use(sprite('amarillo1'))	
		} else if (sumaTiempo < 300) {
			semaforo.use(sprite('rojo1'))	
			semaforo1.use(sprite('rojo1'))	
			semaforo2.use(sprite('rojo1'))	
			semaforo3.use(sprite('rojo1'))	
			semaforo4.use(sprite('rojo1'))	
			semaforo5.use(sprite('rojo1'))	
			semaforo6.use(sprite('rojo1'))	
			semaforo7.use(sprite('rojo1'))	
			semaforo8.use(sprite('rojo1'))	
		} else if (sumaTiempo < 350) {
			semaforo.use(sprite('amarillo1'))	
			semaforo1.use(sprite('amarillo1'))	
			semaforo2.use(sprite('amarillo1'))	
			semaforo3.use(sprite('amarillo1'))	
			semaforo4.use(sprite('amarillo1'))	
			semaforo5.use(sprite('amarillo1'))	
			semaforo6.use(sprite('amarillo1'))	
			semaforo7.use(sprite('amarillo1'))	
			semaforo8.use(sprite('amarillo1'))	
		} else if (sumaTiempo < 500) {
			semaforo.use(sprite('verde1'))	
			semaforo1.use(sprite('verde1'))	
			semaforo2.use(sprite('verde1'))	
			semaforo3.use(sprite('verde1'))	
			semaforo4.use(sprite('verde1'))	
			semaforo5.use(sprite('verde1'))	
			semaforo6.use(sprite('verde1'))	
			semaforo7.use(sprite('verde1'))	
			semaforo8.use(sprite('verde1'))	
		}else{
			sumaTiempo=0
		}
		sumaTiempo++
	})
	
	player.onCollide("block1", () =>{
		if (colicion) {
			if ((sumaTiempo>350)&&(sumaTiempo < 500)) {
				vidaJuego--	
				shake(10)
				vidaJuegoLabel.text = vidaJuego
				if (vidaJuego < 1) {
					add([
						text("Perdiste",{
							size: 200
						}),
						pos(width()/2, height()/2),
						origin("center")
					])
					debug.paused = true
				}
			}
		}
		colicion = false

	})

	player.onCollide("player2", () => {
		if (colicion) {
			vidaJuego--
			shake(5)
			vidaJuegoLabel.text = vidaJuego
			if (vidaJuego < 1) {
				add([
					text("Perdiste",{
						size: 200
					}),
					pos(width()/2, height()/2),
					origin("center")
				])
				debug.paused = true
			}
		}
		colicion = false
	})

	player.onCollide("key", (key) => {
		destroy(key)
		hasKey = true
	})


	player.onCollide("door", () => {
		if (hasKey) {
			if (levelIdx + 1 < levels.length) {
				// music.stop()
				go("main", levelIdx + 1)
			} else {
				// music.stop()
				go("win")
			}
		} else {
			dialog.say("No tomaste la Bandera")
		}
	})


	player.onCollide("character", (ch) => {
		dialog.say(ch.msg)
	})

	player2.onCollide("block", () => {
		console.log("entra?");
		player2.destroy()
		
	})

	onKeyDown("left",()=>{
		if (!debug.paused) {
			player.use(sprite('hero'))
			player.move(LEFT.scale(200))
			player.play("run")	
		}
	})
	onKeyDown("right",()=>{
		if (!debug.paused) {
			player.use(sprite('hero2'))
			player.move(RIGHT.scale(200))
			player.play("run")
		}
	})
	onKeyDown("up",()=>{
		if (!debug.paused) {
			player.use(sprite('hero4'))
			player.play("run")
			player.move(UP.scale(200))
		}
	})
	onKeyDown("down",()=>{
		if (!debug.paused) {
			player.use(sprite('hero3'))
			player.play("run")
			player.move(DOWN.scale(200))
		}
	})
	

	onKeyPress("left",() => {
		dialog.dismiss()
		player.play("run")
	})
	onKeyPress("right",() => {
		player.play("run")
	})
	onKeyPress("up",() => {
		player.play("run")
	})
	onKeyPress("down",() => {
		player.play("run")
	})

	onKeyPress("enter", () => {
		if (!debug.paused) {
			debug.paused = true
			// console.log(player.pos);
			menu2 =add([
				sprite('menu1'),
				pos(playerPos),
				origin('center'),
				scale(2)
			]);
			marco = add([
				sprite('Marco'),
				pos(playerPos.x - 18, playerPos.y -25),
				origin('center'),
				scale(2)
			]);	
		} else {
			debug.paused = false
			menu2.destroy()
			marco.destroy()
		}
	})

})//*Aqui termina la espera de 3Seg en la escena
})

scene("win", () => {
	add([
		text("Ganaste"),
		pos(width() / 2, height() / 2),
		origin("center"),
	])
})

// go('credits-0')
go('main', 0)

// TODO: haciendo la coneccion con la base de datos--------------------------------
import { saveTask, getTasks, onSnapshot, collection, db } from "./firebase.js";

const taskForm = document.getElementById('task-form')
const tasksContainer = document.getElementById('tasks-container')

window.addEventListener('DOMContentLoaded', async () => {
	onSnapshot(collection(db, 'tasks'),(querySnapshot)=>{
	
		let html = ''

		querySnapshot.forEach(doc => {
			const task = doc.data()
			html += `
				
					<tr class="table-active">
						<th scope="row">${task.title}</th>
						<td>${task.description}</td>
						<td>Column content</td>
						<td>Column content</td>
					</tr>
				
			`
		})

		tasksContainer.innerHTML = html
	})
})
taskForm.addEventListener('submit',(e) => {  
	e.preventDefault()

	const title = taskForm['task-title']
	const description = taskForm['task-description']

	saveTask(title.value,description.value)

	taskForm.reset()
})