import { Suspense } from "react";
import Script from "next/script";
import Head from "next/head";
import { useEffect } from "react";
import RewardedAd from "@/components/navbars/reward";
const formatDate = (str: string) => {
  const date = new Date(str);
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
};

export default function Page(data: any) {
  const article = data.data;
  const {
    videoScriptSrc,
    googleClientId,
    googleClientSlotId,
    googleAdSlot,
    mgWidgetId1,
    mgWidgetId2,
    mgWidgetFeedId,
    adsKeeperSrc,
    googleTagId,
  } = data.parameters;

  useEffect(() => {
    try {
      var qcDiv = document.getElementById("qcmgidgb");
      if (qcDiv) {
        var newDiv = document.createElement('div');
        // Thêm div Banner inpage vào
        newDiv.innerHTML = `
          <div class="adsconex-banner-parallax" data-ad-placement="banner20" id="div_ub_inpage20"></div>          
        `;
        qcDiv.appendChild(newDiv);
      }
      var qcDivqc2 = document.getElementById("qcmgidgb2");
      if (qcDivqc2) {
       var newDiv2 = document.createElement('div');
        // Thêm div Banner inpage vào
        newDiv2.innerHTML = `
          <div class="adsconex-banner" data-ad-placement="banner2" id="ub-banner2"></div>          
        `;
        qcDivqc2.appendChild(newDiv2);
      }

      var qcDivqc3 = document.getElementById("qcmgidgb3");
      if (qcDivqc3) {
        var newDiv = document.createElement('div');
        // Thêm div Banner inpage vào
        newDiv.innerHTML = `
          <div class="adsconex-banner-parallax" data-ad-placement="banner21" id="div_ub_inpage21"></div>          
        `;
        qcDivqc3.appendChild(newDiv);
      }

      var qcDivqc4 = document.getElementById("qcmgidgb4");
      if (qcDivqc4) {
       var newDiv4 = document.createElement('div');
        // Thêm div Banner inpage vào
        newDiv4.innerHTML = `
          <div class="adsconex-banner" data-ad-placement="banner3" id="ub-banner3"></div>          
        `;
        qcDivqc4.appendChild(newDiv4);
      }

      var qcDivqc5 = document.getElementById("qcmgidgb5");
if (qcDivqc5) {
  var newDiv5 = document.createElement('div');
  // Thêm div Banner inpage vào
  newDiv5.innerHTML = `
    <div class="adsconex-banner" data-ad-placement="banner4" id="ub-banner4"></div>          
  `;
  qcDivqc5.appendChild(newDiv5);
}

var qcDivqc6 = document.getElementById("qcmgidgb6");
if (qcDivqc6) {
  var newDiv6 = document.createElement('div');
  // Thêm div Banner inpage vào
  newDiv6.innerHTML = `
    <div class="adsconex-banner" data-ad-placement="banner5" id="ub-banner5"></div>          
  `;
  qcDivqc6.appendChild(newDiv6);
}

var qcDivqc7 = document.getElementById("qcmgidgb7");
if (qcDivqc7) {
  var newDiv7 = document.createElement('div');
  // Thêm div Banner inpage vào
  newDiv7.innerHTML = `
    <div class="adsconex-banner" data-ad-placement="banner6" id="ub-banner6"></div>          
  `;
  qcDivqc7.appendChild(newDiv7);
}

var qcDivqc8 = document.getElementById("qcmgidgb8");
if (qcDivqc8) {
  var newDiv8 = document.createElement('div');
  // Thêm div Banner inpage vào
  newDiv8.innerHTML = `
    <div class="adsconex-banner" data-ad-placement="banner7" id="ub-banner7"></div>          
  `;
  qcDivqc8.appendChild(newDiv8);
}



      // const ads = document.getElementsByClassName("adsbygoogle").length;
      // for (var i = 0; i < ads; i++) {
      //   ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
      // }
    // } catch (err) {
    //   console.error("Error with ads", err);
    // }

    // Adjust iframe dimensions
    const iframes = document.querySelectorAll("iframe");
    iframes.forEach((iframe: HTMLIFrameElement) => {
      if (iframe) {
        if (iframe.src.includes("twitter")) {
          iframe.style.height = window.innerWidth <= 525 ? "650px" : "827px";
          iframe.style.width = window.innerWidth <= 525 ? "100%" : "550px";
        } else if (iframe.src.includes("instagram")) {
          iframe.style.height = window.innerWidth <= 525 ? "553px" : "628px";
          iframe.style.width = "100%";
        } else {
          iframe.style.height = window.innerWidth <= 525 ? "250px" : "300px";
          iframe.style.width = "100%";
        }
      }
    });
    }catch (err) {
    console.error("Error with ads", err);
  }
  }, [googleClientId, googleAdSlot, mgWidgetId1, mgWidgetId2]);

  return (
    <>
      <Head>
        <title>{article.name + "-" + article.userCode}</title>
        
        <meta property="og:image" content={article.avatarLink} />
        <meta property="og:title" content={article.name + "-" + article.userCode} />
      </Head>
       <Script src={adsKeeperSrc} async></Script>
      <Script id="gg-1" strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${googleTagId}`} />
      <Script id="gg-2" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${googleTagId}');
        `}
      </Script> 
     
      {/* <Script id="adsbygoogle-init" strategy="afterInteractive" crossOrigin="anonymous" src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${googleClientId}`} />  */}

      <main>
        <div className="container-flu details">
          <div className="adsconex-banner" data-ad-placement="banner1" id="ub-banner1"></div>
          <h1>{article.name}</h1>
          {/* VIDEO PLAYER FEJI: Mã khởi tạo (Giữ nguyên trong Head, thường nên đặt trong body) */}
        <div id="div-ub-feji.io_1723454353847">
          <script>
            {`
              (function() {
                  let w = String.fromCharCode(119, 105, 110, 100, 111, 119),
                      c = String.fromCharCode(99, 109, 100),
                      ub = String.fromCharCode(117, 110) + String.fromCharCode(105, 98, 111) + String.fromCharCode(116, 115),
                      f = String.fromCharCode(117, 110, 105, 98, 111, 116, 115, 80, 108, 97, 121, 101, 114);

                  window[w] = window[w] || {};
                  window[w][ub] = window[w][ub] || {};
                  window[w][ub][c] = window[w][ub][c] || [];
                  window[w][ub][c].push(() => eval(f + "('feji.io_1723454353847')"));
              })();
            `}
          </script>
        </div>
{/* Banner FEJI */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.unibotshb = window.unibotshb || { cmd: [] };
            unibotshb.cmd.push(()=>{ ubHB("feji.io_long"); });
          `
        }}
      />
      
      {/* Video Player FEJI */}
      <div id="div-ub-feji.io_1723454353847">
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.unibots = window.unibots || { cmd: [] };
              unibots.cmd.push(function() { unibotsPlayer("feji.io_1723454353847") });
            `
          }}
        />
      </div>

          <p className="mb-4 text-lg">Posted: {formatDate(article.dateTimeStart)}</p>
          {/* <ins
            className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client={googleClientId}
            data-ad-slot={googleClientSlotId}
            data-ad-format="auto"
            data-full-width-responsive="true"
          />
          <div id="player_dev"></div>
          <div id="div-ub-boonovel.com_1703240626524"></div> */}
          <Suspense fallback={<p>Loading ...</p>}>
            <article className="content" dangerouslySetInnerHTML={{ __html: article.content }} />
          </Suspense>
        </div>

        {/* <div data-type="_mgwidget" data-widget-id={mgWidgetFeedId}></div>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,q){w[q]=w[q]||[];w[q].push(["_mgc.load"])})
              (window,"_mgq");
            `,
          }}
          async
        ></script> */}
      </main>
      {/*<RewardedAd />*/}
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }: { params: any }) {
  try {
    const slug = params?.slug;
    const response = await fetch(`${process.env.APP_API}/News/news-detail?id=${slug?.slice(slug?.lastIndexOf("-") + 1)}`).then((res) => res.json());

    // Pass parameters dynamically
    const parameters = {
      videoScriptSrc: "https://videoadstech.org/ads/topnews_livextop_com.0a05145f-8239-4054-9dc9-acd55fcdddd5.video.js",
      //Code auto 
      googleClientId: "ca-pub-2388584177550957",
      //GA tiêu đề
      googleClientSlotId:"9127559985",
      //GA sau video
      googleAdSlot: "1932979136",
//Cái sau
      mgWidgetId1: "1865915",
      //Cái trước
      mgWidgetId2: "1865915",

      mgWidgetFeedId: "1865914",
      //scrip adkeeper
      adsKeeperSrc: "https://jsc.adskeeper.com/site/1055717.js",
      //Analytic
      googleTagId: "G-J5DGVXB1TH",
    };

    return {
      props: { data: response.data, parameters },
      revalidate: 360000,
    };
  } catch (error) {
    return {
      props: { data: {}, parameters: {} },
    };
  }
}
