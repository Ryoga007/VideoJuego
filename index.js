import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";
import { saveTask, getTasks, onSnapshot, collection, db } from "./firebase.js";

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
loadSprite('mapas0','assets/sprites/block1.png')
loadSprite('mapa1','assets/sprites/Mapa2.png')
loadSprite('mapas1','assets/sprites/Mapas2.png')
loadSprite('block', 'assets/sprites/block1.png' )
loadSprite('block1', 'assets/sprites/block1.png' )
loadSprite('cebra', 'assets/sprites/cono.png')
loadSprite('logoUsfa', 'assets/sprites/LogoUsfa.png')
loadSprite('nivel0', 'assets/sprites/Nivel0.png')
loadSprite('nivel1', 'assets/sprites/Nivel1.png')
loadSprite('menu1', 'assets/sprites/Pausa.png')
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
		x: 0,
		y: 0,
		width: 206,
		height: 85,
		sliceX: 2,
		anims: {
		run: { from: 0, to: 1, loop: true, speed: 5 }
		}
	},
	bot1: {
		x: 208,
		y: 6,
		width: 191,
		height: 73,
		sliceX: 2,
		anims: {
		run: { from: 0, to: 1, loop: true, speed: 5 }
		}
	},
	bot2: {
		x: 400,
		y: 2,
		width: 223,
		height: 75,
		sliceX: 2,
		anims: {
		run: { from: 0, to: 1, loop: true, speed: 5 }
		}
	},
	bot3: {
		x: 0,
		y: 85,
		width: 255,
		height: 85,
		sliceX: 2,
		anims: {
		run: { from: 0, to: 1, loop: true, speed: 5 }
		}
	},
	bot4: {
		x: 256,
		y: 88,
		width: 223,
		height: 69,
		sliceX: 2,
		anims: {
		run: { from: 0, to: 1, loop: true, speed: 5 }
		}
	},
	bot5: {
		x: 0,
		y: 180,
		width: 191,
		height: 57,
		sliceX: 2,
		anims: {
		run: { from: 0, to: 1, loop: true, speed: 5 }
		}
	},
	bot6: {
		x: 192,
		y: 175,
		width: 191,
		height: 63,
		sliceX: 2,
		anims: {
		run: { from: 0, to: 1, loop: true, speed: 5 }
		}
	},
	bot7: {
		x: 384,
		y: 162,
		width: 223,
		height: 75,
		sliceX: 2,
		anims: {
		run: { from: 0, to: 1, loop: true, speed: 5 }
		}
	},
	bot8: {
		x: 0,
		y: 246,
		width: 191,
		height: 55,
		sliceX: 2,
		anims: {
		run: { from: 0, to: 1, loop: true, speed: 5 }
		}
	},
	bot9: {
		x: 192,
		y: 245,
		width: 191,
		height: 59,
		sliceX: 2,
		anims: {
		run: { from: 0, to: 1, loop: true, speed: 5 }
		}
	},
	bot10: {
		x: 384,
		y: 240,
		width: 223,
		height: 61,
		sliceX: 2,
		anims: {
		run: { from: 0, to: 1, loop: true, speed: 5 }
		}
	},
	bot11: {
		x: 448,
		y: 310,
		width: 191,
		height: 55,
		sliceX: 2,
		anims: {
		run: { from: 0, to: 1, loop: true, speed: 5 }
		}
	},
	bot12: {
		x: 0,
		y: 304,
		width: 80,
		height: 109,
	},
	bot13: {
		x: 80,
		y: 304,
		width: 80,
		height: 117,
	},
	bot14: {
		x: 160,
		y: 309,
		width: 53,
		height: 99,
	},
	bot15: {
		x: 224,
		y: 308,
		width: 48,
		height: 87,
	},
	bot16: {
		x: 272,
		y: 313,
		width: 55,
		height:101,
	},
	bot17: {
		x: 336,
		y: 320,
		width: 53,
		height: 80,
	},
	bot18: {
		x: 400,
		y: 314,
		width: 48,
		height: 83,
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
var posBotx;
var posBoty;
var posBot1x;
var posBot1y;
var posBot2x;
var posBot2y;
var posBot3x;
var posBot3y;
var posBot4x;
var posBot4y;
var posBot5x;
var posBot5y;
var posBot6x;
var posBot6y;
var posBot7x;
var posBot7y;
var posBot8x;
var posBot8y;
var posBot9x;
var posBot9y;
var posBot10x;
var posBot10y;
var posBot11x;
var posBot11y;
var posBot12x;
var posBot12y;
var posBot13x;
var posBot13y;
var posBot14x;
var posBot14y;
var posBot15x;
var posBot15y;
var posBot16x;
var posBot16y;
var posBot17x;
var posBot17y;
var posBot18x;
var posBot18y;

var titleGlobal
var descriptionGlobal
var levelIdxGlobal
var scoreGlobal

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
			posBotx = 433
			posBoty = 282
			posBot1x = 100
			posBot1y = 914
			posBot2x = 1549
			posBot2y = 917
			posBot3x = 1563
			posBot3y = 276
			posBot4x = 1822
			posBot4y = 272
			posBot5x = 3163
			posBot5y = 153
			posBot6x = 3163
			posBot6y = 801
			posBot7x = 1584
			posBot7y = 169
			posBot8x = 885
			posBot8y = 821
			posBot9x = 2291
			posBot9y = 796
			posBot10x = 1600
			posBot10y = 796
			posBot11x = 1852
			posBot11y = 149
			posBot12x = 1072
			posBot12y = 342
			posBot13x = 1763
			posBot13y = 332
			posBot14x = 2467
			posBot14y = 339
			posBot15x = 3146
			posBot15y = 349
			posBot16x = 354
			posBot16y = 341
			posBot17x = 1050
			posBot17y = 727
			posBot18x = 2454
			posBot18y = 711
			break;
		default:
			scaleMap = 2
			posBotx = 547
			posBoty = 684
			posBot1x = 1169
			posBot1y = 684
			posBot2x = 1937
			posBot2y = 945
			posBot3x = 663
			posBot3y = 945
			posBot4x = 630
			posBot4y = 1205
			posBot5x = 844
			posBot5y = 578
			posBot6x = 1693
			posBot6y = 578
			posBot7x = 2687
			posBot7y = 578
			posBot8x = 1580
			posBot8y = 839
			posBot9x = 3043
			posBot9y = 839
			posBot10x = 3043
			posBot10y = 839
			posBot11x = 2610
			posBot11y = 1100
			// posBot12x = 1493
			// posBot12y = 1100
			posBot13x = 1054
			posBot13y = 578
			// posBot14x = 1054
			// posBot14y = 578
			posBot15x = 2597
			posBot15y = 578
			// posBot16x = 2597
			// posBot16y = 578
			posBot17x = 1780
			posBot17y = 858
			// posBot18x = 1799
			// posBot18y = 868
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
			" ",    
			" ",    
			" ",
			" ",    
			" ",    
			" ",
			" ",
			" ",
			" ",
			" ",
			" ",
			" =========================================================================",
			" =                                                                       =",
			" =                                                                       =",
			" =  @                                                                  $ =",
			" =                                                                       =",
			" =====================    ===============================    =============",
			" =====================    ===============================    =============",
			" =                                                                       =",
			" =                                                                       =",
			" =                                                                       =",
			" =                                                                       =",
			" =====================================    ================================",
			" =====================================    ================================",
			" =                                                                       =",
			" =                                                                       =",
			" =                                                                       =",
			" =     |                                                                 =",
			" =========================================================================",
			
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
		// "-": () => [
		// 	sprite("bot",{anim: 'run'}),
		// 	area(),
		// 	solid( ),
		// 	move(LEFT,40),
		// 	scale(0.8),
		// 	cleanup(30),
		// 	origin("center"),
		// 	"player2"
			
		// ],
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

	
	const player = get("player")[0]
	player.play("run")
	player.flipX(true)
	// *Colocando todos loa autos 1x1
	const bot = add([
			sprite("bot",{anim: 'run'}),
			pos(posBotx,posBoty),
			area(),
			solid( ),
			move(RIGHT,40),
			scale(0.8),
			// cleanup(30),
			origin("center"),
			"bot"
	])
	const bot1 = add([
		sprite("bot1",{anim: 'run'}),
		pos(posBot1x,posBot1y),
		area(),
		solid( ),
		move(RIGHT,40),
		scale(0.8),
		// cleanup(30),
		origin("center"),
		"bot"
	])
	// console.log(posBot1);
	const bot2 = add([
		sprite("bot2",{anim: 'run'}),
		pos(posBot2x,posBot2y),
		area(),
		solid( ),
		move(RIGHT,40),
		scale(0.8),
		// cleanup(30),
		origin("center"),
		"bot"
	])
	const bot3 = add([
		sprite("bot3",{anim: 'run'}),
		pos(posBot3x,posBot3y),
		area(),
		solid( ),
		move(RIGHT,40),
		scale(0.8),
		// cleanup(30),
		origin("center"),
		"bot"
	])
	const bot4 = add([
		sprite("bot4",{anim: 'run'}),
		pos(posBot4x,posBot4y),
		area(),
		solid( ),
		move(RIGHT,40),
		scale(0.8),
		// cleanup(30),
		origin("center"),
		"bot"
	])
	const bot5 = add([
		sprite("bot5",{anim: 'run'}),
		pos(posBot5x,posBot5y),
		area(),
		solid( ),
		move(LEFT,40),
		scale(0.8),
		// cleanup(30),
		origin("center"),
		"bot"
	])
	const bot6 = add([
		sprite("bot6",{anim: 'run'}),
		pos(posBot6x,posBot6y),
		area(),
		solid( ),
		move(LEFT,40),
		scale(0.8),
		// cleanup(30),
		origin("center"),
		"bot"
	])
	const bot7 = add([
		sprite("bot7",{anim: 'run'}),
		pos(posBot7x,posBot7y),
		area(),
		solid( ),
		move(LEFT,40),
		scale(0.8),
		// cleanup(30),
		origin("center"),
		"bot"
	])
	const bot8 = add([
		sprite("bot8",{anim: 'run'}),
		pos(posBot8x,posBot8y),
		area(),
		solid( ),
		move(LEFT,40),
		scale(0.8),
		// cleanup(30),
		origin("center"),
		"bot"
	])
	const bot9 = add([
		sprite("bot9",{anim: 'run'}),
		pos(posBot9x,posBot9y),
		area(),
		solid( ),
		move(LEFT,40),
		scale(0.8),
		// cleanup(30),
		origin("center"),
		"bot"
	])
	const bot10 = add([
		sprite("bot10",{anim: 'run'}),
		pos(posBot10x,posBot10y),
		area(),
		solid( ),
		move(LEFT,40),
		scale(0.8),
		// cleanup(30),
		origin("center"),
		"bot"
	])
	const bot11 = add([
		sprite("bot11",{anim: 'run'}),
		pos(posBot11x,posBot11y),
		area(),
		solid( ),
		move(LEFT,40),
		scale(0.8),
		// cleanup(30),
		origin("center"),
		"bot"
	])
	const bot12 = add([
		sprite("bot12"),
		pos(posBot12x,posBot12y),
		area(),
		solid( ),
		move(DOWN,40),
		scale(0.8),
		// cleanup(30),
		origin("center"),
		"bot"
	])
	const bot13 = add([
		sprite("bot13"),
		pos(posBot13x,posBot13y),
		area(),
		solid( ),
		move(DOWN,40),
		scale(0.8),
		// cleanup(30),
		origin("center"),
		"bot"
	])
	const bot14 = add([
		sprite("bot14"),
		pos(posBot14x,posBot14y),
		area(),
		solid( ),
		move(DOWN,40),
		scale(0.8),
		// cleanup(30),
		origin("center"),
		"bot"
	])
	const bot15 = add([
		sprite("bot15"),
		pos(posBot15x,posBot15y),
		area(),
		solid( ),
		move(DOWN,40),
		scale(0.8),
		// cleanup(30),
		origin("center"),
		"bot"
	])
	const bot16 = add([
		sprite("bot16"),
		pos(posBot16x,posBot16y),
		area(),
		solid( ),
		move(DOWN,40),
		scale(0.8),
		// cleanup(30),
		origin("center"),
		"bot"
	])
	const bot17 = add([
		sprite("bot17"),
		pos(posBot17x,posBot17y),
		area(),
		solid( ),
		move(DOWN,40),
		scale(0.8),
		// cleanup(30),
		origin("center"),
		"bot"
	])
	const bot18 = add([
		sprite("bot18"),
		pos(posBot18x,posBot18y),
		area(),
		solid( ),
		move(DOWN,40),
		scale(0.8),
		// cleanup(30),
		origin("center"),
		"bot"
	])
	// *añadimos dentro del los semaforos y autos una imagen de fondo
	add([
		sprite('mapas'+levelIdx),
		scale(scaleMap)
	])

	// *Colocando tpodos lo semaforos 1x1
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
		origin("center")
		
	])
	const vidaJuegoLabel = add([
		text(vidaJuego,  {
			size: 80,
		  	}),
	])

	onUpdate(() => {
		if (!colicion) {
			colicionTiempo++
			if (colicionTiempo > 10) {
				colicion = true
				colicionTiempo = 0
			}
		}
		// * para colocar la image haci la derecha
		bot.flipX(true)
		bot1.flipX(true)
		bot2.flipX(true)
		bot3.flipX(true)
		bot4.flipX(true)
		

		// * La suma de score
		score++
		console.log(player.pos);
		// *combertir segundos en horas
			var hour = Math.floor(score / 3600);
			hour = (hour < 10)? '0' + hour : hour;
			var minute = Math.floor((score / 60) % 60);
			minute = (minute < 10)? '0' + minute : minute;
			var second = score % 60;
			second = (second < 10)? '0' + second : second;
			scoreLabel.text = hour + ':' + minute + ':' + second
		// *Posicionando el cronometro
			scoreLabel.use(pos(playerPos.x,playerPos.y-400))
			
		// *Posicionando las Vidas del veiculo
			vidaJuegoLabel.pos = (player.pos)
			vidaJuegoLabel.origin = ("botright")
		// *permitieno que el semaforo empieze a funcionar
		if (sumaTiempo < 20) {
			semaforo.use(sprite('amarillo1'))	
			semaforo1.use(sprite('amarillo1'))	
			semaforo2.use(sprite('amarillo1'))	
			semaforo3.use(sprite('amarillo1'))	
			semaforo4.use(sprite('amarillo1'))	
			semaforo5.use(sprite('amarillo1'))	
			semaforo6.use(sprite('amarillo1'))	
			semaforo7.use(sprite('amarillo1'))	
			semaforo8.use(sprite('amarillo1'))	
		} else if (sumaTiempo < 100) {
			semaforo.use(sprite('rojo1'))	
			semaforo1.use(sprite('rojo1'))	
			semaforo2.use(sprite('rojo1'))	
			semaforo3.use(sprite('rojo1'))	
			semaforo4.use(sprite('rojo1'))	
			semaforo5.use(sprite('rojo1'))	
			semaforo6.use(sprite('rojo1'))	
			semaforo7.use(sprite('rojo1'))	
			semaforo8.use(sprite('rojo1'))	
		} else if (sumaTiempo < 120) {
			semaforo.use(sprite('amarillo1'))	
			semaforo1.use(sprite('amarillo1'))	
			semaforo2.use(sprite('amarillo1'))	
			semaforo3.use(sprite('amarillo1'))	
			semaforo4.use(sprite('amarillo1'))	
			semaforo5.use(sprite('amarillo1'))	
			semaforo6.use(sprite('amarillo1'))	
			semaforo7.use(sprite('amarillo1'))	
			semaforo8.use(sprite('amarillo1'))	
		} else if (sumaTiempo < 200) {
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
			if ((sumaTiempo>120)&&(sumaTiempo < 200)) {
				vidaJuego--	
				shake(10)
				vidaJuegoLabel.text = vidaJuego
				if (vidaJuego < 1) {
					add([
						text("Perdiste\n"+scoreLabel.text,{
							size: 100
						}),
						pos(playerPos.x,playerPos.y-150),
						origin("center")
					])
					debug.paused = true
					// !Guarnado en la base de datos--------------------------------------------------------------
					levelIdxGlobal = levelIdx+1
					scoreGlobal = scoreLabel.text
					saveTask(titleGlobal,descriptionGlobal, levelIdxGlobal, scoreGlobal)
				}
			}
		}
		colicion = false

	})

	player.onCollide('bot', () => {
		if (colicion) {
			vidaJuego--
			shake(5)
			vidaJuegoLabel.text = vidaJuego
			if (vidaJuego < 1) {
				add([
					text("Perdiste\n"+scoreLabel.text,{
						size: 100
					}),
					pos(playerPos.x,playerPos.y-150),
					origin("center")
				])
				debug.paused = true
					levelIdxGlobal = levelIdx+1
					scoreGlobal = scoreLabel.text
					saveTask(titleGlobal,descriptionGlobal, levelIdxGlobal, scoreGlobal)
				// saveTask(title.value,description.value,scoreLabel.text) 
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

	bot.onCollide("block", () => {
		bot.use(pos(posBotx,posBoty))
	})
	bot1.onCollide("block", () => {
		bot1.use(pos(posBot1x,posBot1y))
	})
	bot2.onCollide("block", () => {
		bot2.use(pos(posBot2x,posBot2y))
	})
	bot3.onCollide("block", () => {
		bot3.use(pos(posBot3x,posBot3y))
	})
	bot4.onCollide("block", () => {
		bot4.use(pos(posBot4x,posBot4y))
	})
	bot5.onCollide("block", () => {
		bot5.use(pos(posBot5x,posBot5y))
	})
	bot6.onCollide("block", () => {
		bot6.use(pos(posBot6x,posBot6y))
	})
	bot7.onCollide("block", () => {
		bot7.use(pos(posBot7x,posBot7y))
	})
	bot8.onCollide("block", () => {
		bot8.use(pos(posBot8x,posBot8y))
	})
	bot9.onCollide("block", () => {
		bot9.use(pos(posBot9x,posBot9y))
	})
	bot10.onCollide("block", () => {
		bot10.use(pos(posBot10x,posBot10y))
	})
	bot11.onCollide("block", () => {
		bot11.use(pos(posBot11x,posBot11y))
	})
	bot12.onCollide("block", () => {
		bot12.use(pos(posBot12x,posBot12y))
	})
	bot13.onCollide("block", () => {
		bot13.use(pos(posBot13x,posBot13y))
	})
	bot14.onCollide("block", () => {
		bot14.use(pos(posBot14x,posBot14y))
	})
	bot15.onCollide("block", () => {
		bot15.use(pos(posBot15x,posBot15y))
	})
	bot16.onCollide("block", () => {
		bot16.use(pos(posBot16x,posBot16y))
	})
	bot17.onCollide("block", () => {
		bot17.use(pos(posBot17x,posBot17y))
	})
	bot18.onCollide("block", () => {
		bot18.use(pos(posBot18x,posBot18y))
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
		dialog.dismiss()
		player.play("run")
	})
	onKeyPress("up",() => {
		dialog.dismiss()
		player.play("run")
	})
	onKeyPress("down",() => {
		dialog.dismiss()
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
				// scale(2)1
			]);	
		} else {
			debug.paused = false
			menu2.destroy()
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
go('main', 1)

// TODO: haciendo la coneccion con la base de datos--------------------------------
// import { saveTask, getTasks, onSnapshot, collection, db } from "./firebase.js";

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
						<td>${task.nivel}</td>
						<td>${task.score}</td>
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
	const levelIdx = taskForm['task-nivel']
	const score2 = taskForm['task-score']
	
	titleGlobal = title.value
	descriptionGlobal = description.value
	levelIdxGlobal = levelIdx.value
	scoreGlobal = score2.value
	// saveTask(title.value,description.value)

	taskForm.reset()
})