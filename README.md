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
7. [Learning WebGL](http://learningwebgl.com/blog/?page_id=1217)
8. [perspective matrix](http://ogldev.atspace.co.uk/www/tutorial12/tutorial12.html)
9. [Is OpenGL coordinate system left-handed or right-handed?](http://stackoverflow.com/a/12336360)
10. [Vertex Specification Best Practices](https://www.opengl.org/wiki/Vertex_Specification_Best_Practices)
11. [Best Practices for Working with Vertex Data](https://developer.apple.com/library/ios/documentation/3DDrawing/Conceptual/OpenGLES_ProgrammingGuide/TechniquesforWorkingwithVertexData/TechniquesforWorkingwithVertexData.html)
12. [why the second call to glBindBuffer?](http://stackoverflow.com/a/8599372)
13. [What is the role of glBindVertexArrays vs glBindBuffer and what is their relationship?](http://stackoverflow.com/a/21652955)
http://www.songho.ca/opengl/gl_projectionmatrix.html
http://www.cs.unm.edu/~angel/COURSERA/CODE/Common/
http://rawgit.com/
http://www.ianww.com/blog/2012/12/16/an-introduction-to-custom-shaders-with-three-dot-js/
http://blog.cjgammon.com/three-js-custom-shader-material/
https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL
https://dev.opera.com/articles/introduction-to-webgl-part-1/