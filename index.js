import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

kaboom({
    background: [0, 0, 0],
    width:1600,
    height:900,
})
// *Cargando imagenes estaticas
loadSprite('imgFondoEscena0', 'assets/sprites/wallpaperbetter.jpg')

// *caragando imagenes con movimiento
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
  //   block: {
  //     x: 1,
  //     y: 1,
  //     width: 30,
  //     height: 30,
  //     sliceX: 1
  //   },
  //   cebra: {
  //     x: 1,
  //     y: 1,
  //     width: 30,
  //     height: 30,
  //     sliceX: 1
  //   }
  })
  


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

	wait(4, () => {
	  add([  
		text('Producido por su servidor', {
		  size: 28,
		  font: 'apl386'
		}),
		pos(width()/2, height()/2),
		origin('center')
	  ]);
	})
  
	wait(7, () => {
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
  
	wait(13, () => {
	  go('intro-1')
	})
})


go('credits-0')