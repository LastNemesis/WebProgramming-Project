<!-- = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = Template -->
<template>
    <div class = "body">
        <div class = "Title"> Information about the Emails Reader Web Application</div>
        <br>
        &emsp; - When you access the "Emails" page, you will find a button: "Load your Emails"
        <br>Once you click on the button, a table will appear, displaying all your emails.

        <br><br>
        You can then have ten, twenty or fifty emails displayed on the table. 
        If you wish to access the next emails, simply click at the bottom of the page, 
        the button next emails.
        <br>
    </div>
</template>
  
<!-- = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = Script -->
<script>

  
export default {
    name: 'InformationEmails'
}

</script>
  
<!-- = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = Style -->
<style scoped>

.body{
  background-color: #8cd2b8;
  height: auto;
  color: white;
  font: 14px/1 sans-serif;
  padding: 8px;
  text-align: left;
  margin-bottom: 5px;
  min-height: 150px;
}

.Title{
    font: bold 20px/1 sans-serif;
}
  </style>
  <!-- = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = End -->