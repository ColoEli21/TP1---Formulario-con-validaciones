# Validaciones

Las validaciones se dividen en 4 campos: 
- Nombre
- Email (Expresión regular)
- Contraseña
- Confirmación de contraseña (Expresión regular)

Estas validaciones conformaban un array, y cada validación tenía dos valores posibles: `true` o `false`. 

Cada validación se enviaba a la función `validarCampo`, en la cual se validaban en base a su "validación" que fue enviada desde Validación. 

Si la validación es `true`, se envía `true` y se muestra el mensaje de "correcto" para esa validación.  
Si es `false`, se mostrará un mensaje de "error" para esa validación.

Los mensajes se muestran con `mostrarMensaje`.

Todas las validaciones se chequean para ver si dieron `true`. Si es así, se envía el formulario. Una vez que todas las validaciones sean correctas, se implementa un `addEventListener` que escucha la función Validación e implementa la acción de "submit".

---

# Desafíos

El desafío que enfrenté en este proyecto fue principalmente el tema de las validaciones y el envío del formulario. Sin embargo, pude resolverlo gracias a la profesora, quien me sugirió que debía usar el `addEventListener`, y también a ChatGPT, que me explicó cómo y en qué contexto usar esa función.

---

# Diseño

El diseño fue una parte complicada, ya que no soy muy bueno en ese aspecto, pero gracias a ChatGPT pude hacer lo básico en cuanto a la estética.

---

# ¿Qué le agregaría?

Le agregaría el tema oscuro y claro, ya que es algo que ayuda a la estética de la página. También, agregaría la opción de poder visualizar todos los usuarios que se encuentran en el `localStorage`.
"# TP1---Formulario-con-validaciones" 
