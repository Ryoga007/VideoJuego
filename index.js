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
loadSprite('cebra', 'assets/sprites/cono.png')
loadSprite('logoUsfa', 'assets/sprites/LogoUsfa.png')
loadSprite('nivel0', 'assets/sprites/nivel0.png')

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
      }
    },
  })

  loadSpriteAtlas('assets/sprites/AutoSet02.png', {
    hero2: {
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

// *Declarando las Variables
// const music = play('musicaFondo', {loop: true, volume: 1})
var linea;
var nivel;
var opcionMenu = 1;

  

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
		console.log(onKeyPress);
		go("menu")
	});
})

// *Empieza el Juego

scene("main", (levelIdx) => {
	

	// * Empesacos a CARGAR la pagina con el 'mapa' y la musica de fondo
	add([
		sprite('mapa'),
		scale(4,4)
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
			" =  @        a                                                                         =",
			" =                                                                                     =",
			" =                                                                                     =",
			" =                                                                                     =",
			" =                                                                                     =",
			" =           a                                                                         =",
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
		// "-": () => [
		// 	sprite("steel"),
		// 	area(),
		// 	solid(),
		// ],
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
					solid(),
					"character",
					{ msg: char.msg, },
				]
			}
		},
	})

	
	const player = get("player")[0]
	player.play("run")
	player.onUpdate(() => {

		// function spawnTree() {

			add([
				sprite('hero2',{anim: 'run'}),
				area(),
				// outline(4),
				pos(width(), 200),
				origin("botleft"),
				color(255, 180, 255),
				move(LEFT, 40),
				cleanup(),
				"tree",
			])
		// }
	
		// spawnTree()

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

	const dirs = {
		"left": LEFT,
		"right": RIGHT,
		"up": UP,
		"down": DOWN,
	}

	for (const dir in dirs) {
		onKeyPress(dir, () => {
			dialog.dismiss()
		})
		onKeyDown(dir, () => {
			player.move(dirs[dir].scale(SPEED))
		})
	}
	})
	
})

scene("win", () => {
	add([
		text("You Win!"),
		pos(width() / 2, height() / 2),
		origin("center"),
	])
})

go('credits-0')
// go('main', 0)