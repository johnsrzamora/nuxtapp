<template>
  <div class="mainlayout">
    <Navigation/>
    <Sections :secTitle="sectionTitles[0]" id="1"/>
    <Sections :secTitle="sectionTitles[1]" id="2"/>
    <Sections :secTitle="sectionTitles[2]" id="3"/>
    <Sections :secTitle="sectionTitles[3]" id="4"/>
  </div>
</template>

<script>
export default {
  data(){
    return{
      sectionTitles:['Overview', 'Business-Line', 'Manufacture', 'Export',]
    }
  },
  mounted(){
  }
}


</script>