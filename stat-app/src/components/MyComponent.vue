<template>
  <div>
    <b-row>
      <b-col>
      </b-col>
      <b-col>
    <b-card>
      <b-table :items="site_list" :fields="fields">
        <template v-slot:head(url)>
          주소
        </template>
        <template v-slot:cell(url)="{ item }">
          <b-link :href="item.url">{{ item.name }}</b-link>
        </template>
        <template v-slot:cell(available)="{item}">
          {{!item.available ? '불가' : '가능'}}
        </template>
      </b-table>
      
    </b-card>
      </b-col>
      <b-col></b-col>
    </b-row>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "my-component",
  data: () => {
    return {
      fields: [
        { key: "name", label: "이름" },
        { key: "url", label: "주소" },
        { key: "available", label: "구입가능" }
      ],
      site_list: [
        {
          url: "https://bling-market.com/html/dh_product/prod_view/1807",
          name: "bling market",
          classTag: "total-price",
          containStr: "품절",
          ifconstat: false
        },
        {
          url: "https://smartstore.naver.com/gonggami/products/4705579501",
          name: "nepure",
          classTag: "not_goods",
          containStr: "없는 상품",
          ifconstat: false
        },
        {
          url: "https://smartstore.naver.com/mfbshop/products/4735164530",
          name: "drpuri",
          classTag: "not_goods",
          containStr: "없는 상품",
          ifconstat: false
        },
        {
          url: "https://store.kakao.com/laomete/products/55563134?ref=share",
          name: "laomete",
          classTag: "notice_status",
          containStr: "품절",
          ifconstat: false
        },
        {
          url: "https://smartstore.naver.com/sangkong/products/4762917002",
          name: "sangkong",
          classTag: "not_goods",
          containStr: "없는 상품",
          ifconstat: false
        },
        {
          url: "https://smartstore.naver.com/aer-shop/products/4722827602",
          name: "aer",
          classTag: "not_goods",
          containStr: "없는 상품",
          ifconstat: false
        },
        {
          url: "https://smartstore.naver.com/gonggami/products/4705579501",
          name: "gonggami",
          classTag: "not_goods",
          containStr: "없는 상품",
          ifconstat: false
        },
        // {
        //     url: "http://www.welkeepsmall.com/shop/shopdetail.html?branduid=1007206&xcode=023&mcode=001&scode=&type=X&sort=manual&cur_code=023&GfDT=Z2l3UQ%3D%3D",
        //     name: "wellkips 1",
        //     classTag: "soldout",
        //     containStr: "OUT",
        //     ifconstat: false
        // },
        // {
        //     url: "http://www.welkeepsmall.com/shop/shopdetail.html?branduid=1007205&xcode=023&mcode=001&scode=&type=X&sort=manual&cur_code=023&GfDT=bm59W10%3D",
        //     name: "wellkips 2",
        //     classTag: "soldout",
        //     containStr: "OUT",
        //     ifconstat: false
        // },
        // {
        //     url: "http://www.welkeepsmall.com/shop/shopdetail.html?branduid=997647&xcode=023&mcode=002&scode=&type=X&sort=manual&cur_code=023&GfDT=Zm13Uw%3D%3D",
        //     name: "wellkips 3",
        //     classTag: "soldout",
        //     containStr: "OUT",
        //     ifconstat: false
        // },
        // {
        //     url: "http://www.welkeepsmall.com/shop/shopdetail.html?branduid=951949&xcode=023&mcode=002&scode=&type=X&sort=manual&cur_code=023&GfDT=bm93Ug%3D%3D",
        //     name: "wellkips 4",
        //     classTag: "soldout",
        //     containStr: "OUT",
        //     ifconstat: false
        // },
        // {
        //     url: "http://www.welkeepsmall.com/shop/shopdetail.html?branduid=1007193&xcode=023&mcode=002&scode=&type=X&sort=manual&cur_code=023&GfDT=bmd3VQ%3D%3D",
        //     name: "wellkips 5",
        //     classTag: "soldout",
        //     containStr: "OUT",
        //     ifconstat: false
        // },
        // {
        //     url: "http://www.welkeepsmall.com/shop/shopdetail.html?branduid=997662&xcode=023&mcode=002&scode=&type=X&sort=manual&cur_code=023&GfDT=a2x3VA%3D%3D",
        //     name: "wellkips 6",
        //     classTag: "soldout",
        //     containStr: "OUT",
        //     ifconstat: false
        // },
        // {
        //     url: "http://www.welkeepsmall.com/shop/shopdetail.html?branduid=997650&xcode=023&mcode=002&scode=&type=X&sort=manual&cur_code=023&GfDT=bm19W1o%3D",
        //     name: "wellkips 7",
        //     classTag: "soldout",
        //     containStr: "OUT",
        //     ifconstat: false
        // },
        // {
        //     url: "http://www.welkeepsmall.com/shop/shopdetail.html?branduid=997667&xcode=023&mcode=002&scode=&type=X&sort=manual&cur_code=023&GfDT=bWh3Vg%3D%3D",
        //     name: "wellkips 8",
        //     classTag: "soldout",
        //     containStr: "OUT",
        //     ifconstat: false
        // },
        // {
        //     url: "http://www.welkeepsmall.com/shop/shopdetail.html?branduid=997657&xcode=023&mcode=002&scode=&type=X&sort=manual&cur_code=023&GfDT=Zm93WQ%3D%3D",
        //     name: "wellkips 9",
        //     classTag: "soldout",
        //     containStr: "OUT",
        //     ifconstat: false
        // },
        // {
        //     url: "http://www.welkeepsmall.com/shop/shopdetail.html?branduid=997669&xcode=023&mcode=002&scode=&type=X&sort=manual&cur_code=023&GfDT=aG13WA%3D%3D",
        //     name: "wellkips 10",
        //     classTag: "soldout",
        //     containStr: "OUT",
        //     ifconstat: false
        // },
        // {
        //     url: "http://www.welkeepsmall.com/shop/shopdetail.html?branduid=951923&xcode=023&mcode=002&scode=&type=X&sort=manual&cur_code=023&GfDT=amp3UFw%3D",
        //     name: "wellkips 11",
        //     classTag: "soldout",
        //     containStr: "OUT",
        //     ifconstat: false
        // },
        // {
        //     url: "http://www.welkeepsmall.com/shop/shopdetail.html?branduid=920693&xcode=023&mcode=001&scode=&type=X&sort=manual&cur_code=023&GfDT=Z293UF0%3D",
        //     name: "wellkips 12",
        //     classTag: "soldout",
        //     containStr: "OUT",
        //     ifconstat: false
        // },
        // {
        //     url: "http://www.welkeepsmall.com/shop/shopdetail.html?branduid=922816&xcode=023&mcode=001&scode=&type=X&sort=manual&cur_code=023&GfDT=bmd3UF4%3D",
        //     name: "wellkips 13",
        //     classTag: "soldout",
        //     containStr: "OUT",
        //     ifconstat: false
        // },
        // {
        //     url: "http://www.welkeepsmall.com/shop/shopdetail.html?branduid=1000801&xcode=023&mcode=002&scode=&type=X&sort=manual&cur_code=023&GfDT=bmt7W11H",
        //     name: "wellkips 14",
        //     classTag: "soldout",
        //     containStr: "OUT",
        //     ifconstat: false
        // },
        // {
        //     url: "http://www.welkeepsmall.com/shop/shopdetail.html?branduid=1000798&xcode=023&mcode=002&scode=&type=X&sort=manual&cur_code=023&GfDT=bWl3UFg%3D",
        //     name: "wellkips 15",
        //     classTag: "soldout",
        //     containStr: "OUT",
        //     ifconstat: false
        // },
        // {
        //     url: "http://www.welkeepsmall.com/shop/shopdetail.html?branduid=1000802&xcode=023&mcode=002&scode=&type=X&sort=manual&cur_code=023&GfDT=bWZ3UFk%3D",
        //     name: "wellkips 16",
        //     classTag: "soldout",
        //     containStr: "OUT",
        //     ifconstat: false
        // },
        // {
        //     url: "http://www.welkeepsmall.com/shop/shopdetail.html?branduid=1000799&xcode=023&mcode=002&scode=&type=X&sort=manual&cur_code=023&GfDT=bmx3UFo%3D",
        //     name: "wellkips 1",
        //     classTag: "soldout",
        //     containStr: "OUT",
        //     ifconstat: false
        // },
        // {
        //     url: "http://www.welkeepsmall.com/shop/shopdetail.html?branduid=997637&xcode=023&mcode=003&scode=&type=X&sort=manual&cur_code=023&GfDT=bmt0W11D",
        //     name: "wellkips 2",
        //     classTag: "soldout",
        //     containStr: "OUT",
        //     ifconstat: false
        // },
        // {
        //     url: "http://www.welkeepsmall.com/shop/shopdetail.html?branduid=1000803&xcode=023&mcode=002&scode=&type=X&sort=manual&cur_code=023&GfDT=bm59W11M",
        //     name: "wellkips 3",
        //     classTag: "soldout",
        //     containStr: "OUT",
        //     ifconstat: false
        // },
        // {
        //     url: "http://www.welkeepsmall.com/shop/shopdetail.html?branduid=997640&xcode=023&mcode=003&scode=&type=X&sort=manual&cur_code=023&GfDT=bm19W11N",
        //     name: "wellkips 4",
        //     classTag: "soldout",
        //     containStr: "OUT",
        //     ifconstat: false
        // },
        // {
        //     url: "http://www.welkeepsmall.com/shop/shopdetail.html?branduid=1000800&xcode=023&mcode=002&scode=&type=X&sort=manual&cur_code=023&GfDT=bml7W15E",
        //     name: "wellkips 5",
        //     classTag: "soldout",
        //     containStr: "OUT",
        //     ifconstat: false
        // },
        {
          url:
            "http://www.welkeepsmall.com/shop/shopdetail.html?branduid=1001308&xcode=023&mcode=003&scode=&type=X&sort=manual&cur_code=023&GfDT=am13U10%3D",
          name: "wellkips 6",
          classTag: "soldout",
          containStr: "OUT",
          ifconstat: false
        },
        {
          url:
            "http://www.welkeepsmall.com/shop/shopdetail.html?branduid=1001309&xcode=023&mcode=003&scode=&type=X&sort=manual&cur_code=023&GfDT=a253U14%3D",
          name: "wellkips 7",
          classTag: "soldout",
          containStr: "OUT",
          ifconstat: false
        }
      ]
    };
  },
  methods: {}
};
</script>
