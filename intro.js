<html>
<body>

<h2>JavaScript Objects</h2>

<p id="demo"></p>

<script>
let person = {
  firstName : "John",
  lastName  : "Doe",
  age     : 50,
  eyeColor  : "blue"
};

document.getElementById("demo").innerHTML =
person.firstName + " is " + person.eyeColor + " years old.";
</script>

</body>
</html>
