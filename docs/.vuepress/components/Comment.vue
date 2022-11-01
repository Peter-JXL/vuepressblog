// Comment.vue
<template>
    <div class="gitalk-container">
        <div id="gitalk-container"></div>
    </div>
</template>

<script>
  import 'gitalk/dist/gitalk.css'
  import Gitalk from 'gitalk'

  export default {
    name: 'comment',
    mounted() {
      const commentConfig = {
        clientID: '9196a45c06be19674451',
        clientSecret: 'b9ea064cd72a0175a0123be948e99331740eff0b',
        repo: 'vuepressblog',
        owner: 'Peter-JXL',
        admin: ['Peter-JXL'],
        id: md5(location.pathname)
      };
      const gitalk = new Gitalk(commentConfig);
      gitalk.render('gitalk-container');
    }
  };
</script>
