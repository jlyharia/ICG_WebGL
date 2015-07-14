Interactive Computer Graphics with WebGL
----------------------------------------

###Information
This command tells WebGL we want to supply data from a buffer.

gl.vertexAttribPointer(
    location,
    numComponents,
    typeOfData,
    normalizeFlag,
    strideToNextPieceOfData,
    offsetIntoBuffer);
And this command tells WebGL to get data from the buffer that's was last bound with gl.bindBuffer, 
how many components per vertex (1 - 4), what the type of data is (BYTE, FLOAT, INT, UNSIGNED_SHORT, etc...), 
the stride which means how many bytes to skip to get from one piece of data to the next piece of data, 
and an offset for how far into the buffer our data is.

- Tessellation
Deviding object, a vurve, a surface or a volume, 
into smaller parts, each of which can be rendered independently


See
---
1. [course](https://class.coursera.org/webgl-001)  
2. http://webglfundamentals.org/webgl/lessons/webgl-how-it-works.html  
3. https://open.gl/drawing  
4. [javascript pointer](http://stackoverflow.com/a/10231963)
5. [glMatrix](http://glmatrix.net/)
6. [three.js](http://threejs.org/)
http://www.cs.unm.edu/~angel/COURSERA/CODE/Common/
