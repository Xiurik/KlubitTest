# Klubit Test

La versión de angular utilizada para este proyecto es: [Angular CLI](https://github.com/angular/angular-cli) versión 11.1.4.

> **Nota:** Favor de actualizar tu versión de Angular global para poder ejecutar este proyecto.

## Instrucciones

La idea de este examen es medir tus habilidades y conocimientos en Angular.

La aplicación consiste en lo siguiente:
Se tienen 2 componentes que se comunican entre ellos, el primer componente es un formulario y el segundo es para la carga de imagenes.

**Puntos a Evaluar**

- [ ] El formulario tiene que validar los **campos obligatorios**
- [ ] Los **campos de texto** indicados con una **T -** al inicio solo permitirán introducir texto, no se puede meter ningún carácter diferente al espacio en blanco, punto, coma y las letras del abecedario.
- [ ] Los **campos numéricos** indicados con una **N -** al inicio solo permiten introducir números, no se puede ningún otro tipo de carácter que no sea numérico exclusivamente.
- [ ] El campo **Edad** tendrá que mostrar un mensaje cuando esta sea menor a 18 y otro cuando sea mayor o igual a 18.
- [ ] El campo de **Comentarios** debe de crecer conforme el usuario introduzca texto pero no debe de ser expandible por el usuario.
- [ ] El campo de **Contraseña y Confirmar Contraseña** no debe mostrar lo que se está escribiendo.
- [ ] Se debe de validar que los campos **Contraseña y Confirmar Contraseña** sean iguales, en cambio de que sean diferentes, se debe de mostrar un mensaje de error.
- [ ] El campo de **Agendar Viaje** si se da click, ambos campos de **Inicio y Fin** deberán de ser habilitados, si no está seleccionado el checkbox de **No Agendar Viaje**, ambos deben de estar inhabilitados.
- [ ] Al cargar el componente la fecha de Inicio debe de ser igual a la **fecha actual** y el Final tiene que ser el dia siguiente, por ejemplo: **Inicio = 01/10/2021, Final = 02/10/2021**, esto considerando que el formato es DD/MM/YYYY.
- [ ] La fecha de **Inicio** no puede ser menor a la fecha **actual**
- [ ] La fecha de **Inicio** no puede ser mayor a la **Final**
- [ ] La fecha **Final** no puede ser menor a la de **Inicio**
- [ ] Lo anterior mencionado de las fechas debe de mostrar un mensaje de error cuando sea necesario para indicar al usuario el error que está cometiendo.
- [ ] El componente de Imagen debe de permitir únicamente archivos de **imagen**, si el usuario intenta subir cualquier otro archivo debe de mandar mensaje de error.
- [ ] El componente de **imagen** recibirá el nombre del usuario y mostrará como título: Hola XXXXXX, estamos listos para procesar tus imágenes, teniendo en cuenta que XXXXXX es el nombre del usuario.
- [ ] El componente de **imagen** no deberá de permitir subir archivos de más de **4 Mb**.
- [ ] El componente de **imagen** una vez termine de procesar la imagen, deberá retornar el nombre de la imagen y su peso convertido a **Mb** al formulario y ser mostrados en los campos correspondientes.

> **Nota** El formato de fecha a utilizar es a criterio propio.
> **Nota** El contenido de los mensajes quedan a criterio propio
