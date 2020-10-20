 
/****************************************************************************************************
*                                                                                                   *
*                                Fetch pages via ajax call                                          *
*                                                                                                   *
****************************************************************************************************/   

    function renderPage(obj){
      // alert(200);
        src = obj.src+".html?v4";
        title = obj.title;
        content = obj.content;

        if(title){
          $("title").html(title);
        }

        if(content){
          $("#meta-desc").attr("content", content);
        }

        $.get(src, function(response){
           let page = "";
           response = response.split("<template>");
           response = response[1].split("</template>");
            $.get("../header.html?v3", (resp) => {
              page += resp;
            })
            .then(()=>{
              $.get("../footer.html?v3", (data) => {
                page += response[0]+data;
                $("#load-app").html(page);
                $("body").append(response[1]);    
              })
            })
            

        })
    }



// Initialise the router
var router = new LightRouter({
  type: 'path',             // Default routing type
  pathRoot: 'http://localhost:5000/',  // Base path for your app
  routes: {
     '': () => {
      renderPage({
      src:"../home", 
      title: "HWCN | Unveiling the patterns of true worship",
    })
    },
  }
});

router.add("sermons", () => {
  renderPage({
    src: "../sermons", 
    title: "HWCN | Download anointed messages",
    content: "His Worship Christian Network (HWCN) - Download sermons by Rev'd Tolu Agboola."+
    "HWCN is committed to raising true worshippers by the unveiling of the patterns of true worship"
  })
});
router.add("give-online", () => {
  renderPage({
    src: "../give-online",
    title: "HWCN | Give online",
  })
});
router.add("upcoming-events", () => {
  renderPage({
    src: "../events",
    title: "HWCN | Upcoming events",
  })
});
router.add("the-ark-partnership", () => {
  renderPage({
    src: "../partner-ark", 
    title: "HWCN | Building The Ark - Partnership", 
    content: "His Worship Christian Network (HWCN) - Rev'd Tolu Agboola As we came into the Month of"+
     "June, 2020, the LORD finally Commissioned us to build HIM a House; HE called it"+
     "'The ARK'; a place where A generation will be preserved unto HIM."
   })
});
router.add("contact", () => {
  renderPage({
    src: "../contact",
    title: "HWCN | Contact us",
  })
});
router.add(undefined, () => {
  renderPage({
    src: "../home",
    title: "HWCN | Unveiling the patterns of true worship",
  })
});

router.run();