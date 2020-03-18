
      let A =  [["00BCD4", "FFEB3B","FFEB3B","00BCD4"],
      ["FFEB3B", "FFC107","FFC107","FFEB3B"],
      ["FFEB3B", "FFC107","FFC107","FFEB3B"],
      ["00BCD4", "FFEB3B","FFEB3B","00BCD4"]];

      let canvas = document.getElementById("draw"), 
          ctx = canvas.getContext("2d"),
          width = 4,
          height = 4, 
          scale = 128; 

      canvas.width = width * scale; 
      canvas.height = height * scale; 

      for(let row = 0; row < height; row++) {
          for(let col = 0; col < width; col++) {
              ctx.fillStyle = '#'+A[row][col]; 
              ctx.fillRect(col * scale, row * scale, scale, scale); 
          }
      }