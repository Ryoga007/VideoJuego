import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

kaboom({
    background: [0, 0, 0],
    width:1700,
    height:900,
})
// *Cargando imagenes estaticas
loadSprite('imgFondoEscena0', 'assets/sprites/wallpaperbetter.jpg')
loadSprite('imgFondoEscena1', 'assets/sprites/wallpaperbetter1.jpg')
loadSprite('imgFondoEscena2', 'assets/sprites/wallpaperbetter1.jpg')
loadSprite('imgIntroLinia', 'assets/sprites/Linia.png')
loadSprite('imgDocente', 'assets/sprites/docente.png')
loadSprite('mapa','assets/sprites/mapaAset01.png')
loadSprite('block', 'assets/sprites/block1.png' )
loadSprite('block1', 'assets/sprites/block1.png' )
loadSprite('cebra', 'assets/sprites/cono.png')
loadSprite('logoUsfa', 'assets/sprites/LogoUsfa.png')
loadSprite('nivel0', 'assets/sprites/nivel0.png')
loadSprite('menu1', 'assets/sprites/Menu1.png')
loadSprite('Marco', 'assets/sprites/Marco.png')



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
	

	// * Empesacos a CARGAR la pagina con el 'mapa' y la musica de fondo
	add([
		sprite('mapa'),
		// pos(4,4),
		scale(4)

	])
	
	// const music = play("musicaFondo", {
	// 	volume: 0.5,
	// 	loop: true
	// })

	
	const SPEED = 320

	const characters = { 
		"a": {
			sprite: "cebra",  //!Cambio "bag" por "cebra"
			msg: "Es un paso de Cebra, recuerda mirar a ambos lados",
		},
		// "b": {
		// 	sprite: "ghosty",
		// 	msg: "get out!",
		// },
	}


	const levels = [
		[
			" ",    
			" ",
			" =======================================================================================",
			" =  @        +        -                   -                                            =",
			" =                                                                                     =",
			" =                                                                                     =",
			" =                                                                                     =",
			" =                             -                             -                     -   =",
			" =           +                                                                         =",
			" ====       =============      =============      ==============      ==============   =",
			"    =       =           =      =           =      =            =      =            =   =",
			"    =       =           =      =           =      =            =      =            =   =",
			"    =       =           =      =           =      =            =      =            =   =",
			"    =       =           =      =           =      =            =      =            =   =",
			"    =       =           =      =           =      =            =      =            =   =",
			"    =       =           =      =           =      =            =      =            =   =",
			"    =       =           =      =           =      =            =      =            =   =",
			"    =       =           =      =           =      =            =      =            =   =",
			"    =       =           =      =           =      =            =      =            =   =",
			"    =       =           =      =           =      =            =      =            =   =",
			" ====       =============      =============      ==============      ==============   =",
			" =                                                                                     =",
			" =                                         -                                           =",
			" =                                                                                     =",
			" =                                                                                -    =",
			" =                                                                                     =",
			" =                      -                                                              =",
			" ====       =============      =============      ==============      ==============   =",
			"    =       =           =      =           =      =            =      =            =   =",
			"    =       =           =      =           =      =            =      =            =   =",
			"    =       =           =      =           =      =            =      =            =   =",
			"    =       =           =      =           =      =            =      =            =   =",
			"    =       =           =      =           =      =            =      =            =   =",
			"    =       =           =      =           =      =            =      =            =   =",
			"    =========           ========           ========            ========            =====",
		],
		[
			"---------",
			"-       -",
			"-       -",
			"-  $    -",
			"|       -",
			"-       -",
			"-     a -",  //!cambiando al bicho b por a
			"-   @   -",
			"---------",
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
		width: 36,
		height: 36,
		// pos: vec2(64, 64),
		"=": () => [
			sprite("block"), //!cambiando "grass" por "block"
			area(),
			solid(),
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
			// solid(),
			move(LEFT, 40),
			scale(0.8),
			cleanup(30),
			"player2"
			
		],
		// "$": () => [
		// 	sprite("key"),
		// 	area(),
		// 	"key",
		// ],
		"@": () => [
			sprite("hero"), //!cambiando "bean" por "hero"
			area(),
			solid(),
			scale(3),
			"player",
		],
		// "|": () => [
		// 	sprite("door"),
		// 	area(),
		// 	solid(),
		// 	"door",
		// ],

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

	const player2 = get("player")[0]
	const player = get("player")[0]
	player.play("run")
	player.flipX(true)

	
	var semaforo = add([
		sprite('amarillo1'),
		pos(370,300),
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
		// *permitieno que el semaforo empieze a funcionar
		if (sumaTiempo < 200) {
			semaforo.use(sprite('amarillo1'))	
		} else if (sumaTiempo < 300) {
			semaforo.use(sprite('rojo1'))	
			
		} else if (sumaTiempo < 500) {
			semaforo.use(sprite('verde1'))	
			
		}else{
			sumaTiempo=0
		}
		sumaTiempo++
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

	player.onCollide("block1", () =>{
		console.log("aqui pasa algo");
		// semaforo.use(scale(0.5))
	})

	player.onCollide("key", (key) => {
		destroy(key)
		hasKey = true
	})


	player.onCollide("door", () => {
		if (hasKey) {
			if (levelIdx + 1 < levels.length) {
				music.stop()
				go("main", levelIdx + 1)
			} else {
				music.stop()
				go("win")
			}
		} else {
			dialog.say("you got no key!")
		}
	})


	player.onCollide("character", (ch) => {
		dialog.say(ch.msg)
	})

	onKeyDown("left",()=>{
		player.use(sprite('hero'))
		player.move(LEFT.scale(200))
		player.play("run")
	})
	onKeyDown("right",()=>{
		player.use(sprite('hero2'))
		player.move(RIGHT.scale(200))
		player.play("run")
	})
	onKeyDown("up",()=>{
		player.use(sprite('hero4'))
		player.play("run")
		player.move(UP.scale(200))
	})
	onKeyDown("down",()=>{
		player.use(sprite('hero3'))
		
		player.play("run")
		player.move(DOWN.scale(200))
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

	

	// if (debug.paused) {
	// 	console.log("ya pues");
	// 	onKeyPress("down", () => {
	// 		console.log("entra");

	// 		switch (opcionMenu2) {
	// 			case 1:
	// 				marco.destroy();
	// 				marco = add([
	// 					sprite('Marco'),
	// 					pos(playerPos.x - 18, playerPos.y + 75),
	// 					origin('center'),
	// 					scale(2)
	// 				]);
	// 				opcionMenu2 = 2;
	// 			break;
	// 			default:
	// 				marco.destroy();
	// 				marco = add([
	// 					sprite('Marco'),
	// 					pos(playerPos.x - 18, playerPos.y - 25),
	// 					origin('center'),
	// 					scale(2)
	// 				]);
	// 				opcionMenu2 = 1;
	// 			break;
	// 		}
	// 	})
	
	// 	onKeyPress("up", () => {

	// 		switch (opcionMenu2) {
	// 			case 1:
	// 				marco.destroy();
	// 				marco = add([
	// 					sprite('Marco'),
	// 					pos(playerPos.x - 18, playerPos.y - 25),
	// 					origin('center'),
	// 					scale(2)
	// 				]);
	// 				opcionMenu2 = 2;
	// 			break;
	// 			default:
	// 				marco.destroy();
	// 				marco = add([
	// 					sprite('Marco'),
	// 					pos(playerPos.x - 18, playerPos.y + 75),
	// 					origin('center'),
	// 					scale(2)
	// 				]);
	// 				opcionMenu2 = 1;
	// 			break;
	// 		}
	// 	})
	// }

	
})//*Aqui termina la espera de 3Seg en la escena
})

scene("win", () => {
	add([
		text("You Win!"),
		pos(width() / 2, height() / 2),
		origin("center"),
	])
})

// go('credits-0')
go('main', 0)