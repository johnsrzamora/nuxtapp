<template>
  <div class="mainlayout">
    <Navigation/>
    <Sections :secTitle="sectionTitles[0]" id="1"/>
  </div>
</template>

<script>
export default {
  data(){
    return{
      sectionTitles:['Stephen Zamora', 'Business-Line', 'Manufacture', 'Export',]
    }
  },
  mounted(){
  }
}
</script>