

let data =[
'0',
'Angel 777 Cheerleader Swimsuit Uniform',
'Angel Babydoll Lingerie',
'ARA ARA~Bodysuit',
'Blush Bunny Ears Lingerie',
'Burgundy Velvet Lace Sweetheart Lingerie',
'Chaotic Nurse Outfit',
'Cow Bikini',
'Cyber Bunny Set',
'Cyber Succubus',
'Danger Cyber Cat Bikini',
'Danger Cyber Cat Outfit (Top)',
'Danger Cyber Cat Outfit (Bottoms)',
'Drippin In Milk Dress',
'Drippin In Milk Lingerie',
'Drippin in Milk Swimsuit',
'Hell Rider Succubus Lingerie',
'Kawaii Reflective Rainbow Sailor Set',
'Latex Succubus Nurse (Top)',
'Latex Succubus Nurse (Bottom)',
'Love Dessert Cow Maid',
'Manga Noises Bikini',
'Manga Noises One Piece Swimsuit',
'Mesh Manga Noises Dress',
'Milk & Cream Maid',
'Neko Swimsuit',
'Present Bow Lingerie',
'Red Metallic Holiday Sleigh',
'Reflective Moon Set',
// 'Reflective Moon Japanese Sailor Uniform Top',
// 'Reflective Moon Japanese Sailor Uniform Bottom',
'Ribbon Kitten',
'Saint/Sinner Sheer Nun Set',
'Sheer Succubus Bodysuit',
'Soft Spring Cow Set',
'Sweet Talk Heart Ruffle Lingerie',
'Swimsuit Danger Gamer Bunny Bikini',
'Tactical Maid',
'Valentine Bunny',
'Winter Bunny Heart Rhinestone Bodysuit',
];
  //creating image url links                                                                                                     1;                                                      
let linksOfImgFromWe=[
    "0"
    ,"https://cdn.shopify.com/s/files/1/0344/9847/8220/products/angel-cheerleader-kawaii-lingerie-6_360x.jpg?v=1632157121"
    ,"https://cdn.shopify.com/s/files/1/0344/9847/8220/products/Japanese-ANGEL-BABYDOLL-LINGERIE_360x.jpg?v=1632157104"
    ,"https://cdn.shopify.com/s/files/1/0344/9847/8220/products/Thumbnail_AraAraBodysuit_360x.png?v=1648173195"
    ,"https://cdn.shopify.com/s/files/1/0344/9847/8220/products/Thumbnail_BlushBunnyPink_360x.png?v=1648173505"
    ,"https://cdn.shopify.com/s/files/1/0344/9847/8220/products/Thumbnail_Burgundy_360x.png?v=1648173540"
    ,"https://cdn.shopify.com/s/files/1/0344/9847/8220/products/Thumbnail_ChaoticNurseBlack5OPACITY_360x.png?v=1676928148"
    ,"https://cdn.shopify.com/s/files/1/0344/9847/8220/products/withsleeve-black-CowBikini-thumbnail_360x.png?v=1668123838"
    ,"https://cdn.shopify.com/s/files/1/0344/9847/8220/products/CyberBlackBunnySetMF00000front_92ba9403-3f8f-4854-8604-a3f3fca7e16f_360x.png?v=1632157941"
    ,"https://cdn.shopify.com/s/files/1/0344/9847/8220/products/goldtail-CyberSuccubus-thumbnail_360x.png?v=1665467226"
    ,"https://cdn.shopify.com/s/files/1/0344/9847/8220/products/CyberCatBikiniThumbnail10_360x.png?v=1648691532"
    ,"https://cdn.shopify.com/s/files/1/0344/9847/8220/products/Thumbnail_6f06b0c3-c6ac-4d3d-8bbb-82b211adc5ef_360x.jpg?v=1636443405"
    ,"https://cdn.shopify.com/s/files/1/0344/9847/8220/products/Thumbnail_6f06b0c3-c6ac-4d3d-8bbb-82b211adc5ef_360x.jpg?v=1636443405"
    ,"https://cdn.shopify.com/s/files/1/0344/9847/8220/products/Milk-cow-lingerie-anime-waifu-dress-9_360x.png?v=1654907669"
    ,"https://cdn.shopify.com/s/files/1/0344/9847/8220/products/Thumbnail_Drippin_Milk_Lingerie_5_OPACITY_360x.png?v=1655386147"
    ,"https://cdn.shopify.com/s/files/1/0344/9847/8220/products/black-DrippinInMilk-thumbnail_360x.png?v=1668122284"
    ,"https://cdn.shopify.com/s/files/1/0344/9847/8220/products/Hell_Rider_Succubus_Black_OP5_360x.png?v=1655381491"
    ,"https://cdn.shopify.com/s/files/1/0344/9847/8220/products/blackref_720x.jpg?v=1632157785"
    ,"https://cdn.shopify.com/s/files/1/0344/9847/8220/products/Thumbnail1_301x.png?v=1664564665"
    ,"https://cdn.shopify.com/s/files/1/0344/9847/8220/products/Thumbnail1_301x.png?v=1664564665"
    ,"https://cdn.shopify.com/s/files/1/0344/9847/8220/products/Thumbnail_LoveDessertCow-Pink_360x.png?v=1661466991"
    ,"https://cdn.shopify.com/s/files/1/0344/9847/8220/products/ThumbnailMangaNoisesBikini_360x.jpg?v=1657060006"
    ,"https://cdn.shopify.com/s/files/1/0344/9847/8220/products/Thumbnail_MangaNoisesSwimsuitBlack5OPACITY_360x.png?v=1653724560"
    ,"https://cdn.shopify.com/s/files/1/0344/9847/8220/products/Thumbnail_MangaNoisesDressPink5OPACITY_360x.png?v=1653782996"
    ,"https://cdn.shopify.com/s/files/1/0344/9847/8220/products/Thumbnail_MilkCreamMaid_360x.png?v=1648174423"
    ,"https://cdn.shopify.com/s/files/1/0344/9847/8220/products/BlueNekoThumbnail_360x.jpg?v=1657060456"
    ,"https://cdn.shopify.com/s/files/1/0344/9847/8220/products/PresentBowRibbonOP5_360x.png?v=1651047262"
    ,"https://cdn.shopify.com/s/files/1/0344/9847/8220/products/red-metallic-santa-punk-lingerie-2_86234d76-b658-4b18-89b1-8bad470c3c41_360x.jpg?v=1639008391"
    ,"https://cdn.shopify.com/s/files/1/0344/9847/8220/products/mirrorblue_360x.gif?v=1632157436"
    // ,"https://cdn.shopify.com/s/files/1/0344/9847/8220/products/top1_720x.jpg?v=1632157517"
    // ,"https://cdn.shopify.com/s/files/1/0344/9847/8220/products/skirt1_e79dc59e-c64a-42a0-95e2-3fd631d348a2_720x.jpg?v=1632157514"
    ,"https://cdn.shopify.com/s/files/1/0344/9847/8220/products/Ribbon_Kitten_OP5_1_360x.png?v=1655384634"
    ,"https://cdn.shopify.com/s/files/1/0344/9847/8220/products/SaintMeshNunOutfitMF00003front1_360x.jpg?v=1632157262"
    ,"https://cdn.shopify.com/s/files/1/0344/9847/8220/products/Sheer_Succubus_Demon_Bodysuit_Black_OP5_25d57aed-48bc-4688-9069-1b92ddb7e078_360x.png?v=1653946087"
    ,"https://cdn.shopify.com/s/files/1/0344/9847/8220/products/Thumbnail_SoftSpringCowBlack_360x.png?v=1648691453"
    ,"https://cdn.shopify.com/s/files/1/0344/9847/8220/products/Sweet_Valentine_Heart_Pink_OP5_360x.png?v=1655385066"
    ,"https://cdn.shopify.com/s/files/1/0344/9847/8220/products/Thumbnail_DangerGamerBunnyBikini1_360x.png?v=1657059658"
    ,"https://cdn.shopify.com/s/files/1/0344/9847/8220/products/Thumbnail_TactticalMaid5OPACITY_360x.png?v=1654411943"
    ,"https://cdn.shopify.com/s/files/1/0344/9847/8220/products/1.ValentineBunnyThumbnail_360x.jpg?v=1674683045"
    ,"https://cdn.shopify.com/s/files/1/0344/9847/8220/products/winter-bunny-heart-rhinestone-3_360x.jpg?v=1632158129"
    // done ho gaya hai
];





var selectedItem = "";
var selectedItemName = "";
//function to get the value of the selected product
function productRequirements(index){

    let products = index;

    //list of all the products to check against the selected product
    // alert(products);

//  let ProductIMG = ["0","      1      ","      2   ", "        3    ","    4     ","     5    ","      6      ","         7       ","            8           ","        9      ","          10      "," 11  "," 12 ","    13  ","  14 ","    15       ","       16         ","  17    ","    18    ","     19     ","    20    ","         21       ","22   ","       23    ","    24    ","       25        ","             26        ","   27     ","    28  ","  29 ","    30    ","   31     ","  32      ","       33    ","      34      ","        35        ","   36     ","       37     ","    38    "];
    let ProductIMG = ["0","bustWaistHip1","underBust1", "bustWaistHip2","underBust2","bustWaist1","bustWaistHip3","underBustUpperHip1","underBustWaistUpperHip1","underBustWaist1","underBustUpperHip2","bust1","hip1","bustHip1","bust2","bustUpperHip1","bustUnderBustHell1","bustHip2","underBust3","upperHipHip1","waistOnly1","underBustUpperHip2","bust3","bustWaistHip4","waistOnly2","bustUpperHipNeko2","underBustUpperHipThigh1","waistOnly3","bustHip3","waistOnlyRibbon4","waistOnly5","bustWaistSheer2","bustWaistHip5","waistUpperHip1","underBustUpperHipSwim3","waistOnly6","waistUpperHip2","bustWaist3"];
   
    // alert(ProductIMG[products]+" "+data[products]);
    // alert(linksOfImgFromWe.length);
    //creating image url links
  

        // alert(ProductIMG[products]);
        // code which is rendering the image or displaying image start
        document.getElementById("productDetails").classList.remove("d-none");
        document.getElementById("images").innerHTML = "<p class='text-center'><img src='" + linksOfImgFromWe[products] +"' alt='image of " + products + "' class='img-fluid' style='height:380px'></p>";        
        selectedItem = ProductIMG[products];
        selectedItemName = data[products];
        // code which is rendering the image or displaying image ends

        // alert(selectedItemName  +"========"+  selectedItem +"========"+ products);
        // alert(linksOfImgFromWe.length +"="+ linksOfImgFromWe[products]+"="+ products);

}


    // code to check sizes of the product
function calculate(){

    let bust = document.getElementById("bust").value;
    let waist = document.getElementById("waist").value;
    let hip = document.getElementById("hip").value;
    let underBust = document.getElementById("UnderBust").value;
    let upperHip = document.getElementById("UpperHip").value; 
    document.getElementById("bustNew").value = bust;
    document.getElementById("waistNew").value = waist;
    document.getElementById("hipNew").value = hip;
    document.getElementById("underBustNew").value = underBust;
    document.getElementById("upperHipNew").value = upperHip;
    document.getElementById("productName").innerHTML = selectedItemName;




    switch(selectedItem){

        case "underBustWaist1":
             if(underBust>=26 && underBust<=28 && waist>=24 && waist<=25){
                document.getElementById("recommendedSize").innerHTML = "Recommended size: XS/S";
            }
            else if(underBust>=28 && underBust<=30 && waist>=25 && waist<=26){
                document.getElementById("recommendedSize").innerHTML = "Recommended size: S/M";
            }
            else if(underBust>=30 && underBust<=32 && waist>=26 && waist<=28){
                document.getElementById("recommendedSize").innerHTML = "Recommended size: M/L";
            }
            else if(underBust>=33 && underBust<=35 && waist>=28 && waist<=30){
                document.getElementById("recommendedSize").innerHTML = "Recommended size: L/XL";
            }
            else if(underBust>=35 && underBust<=37 && waist>=31 && waist<=33){
                document.getElementById("recommendedSize").innerHTML = "Recommended size: XL/XXL";
            }
            else if(underBust>=37 && underBust<=39 && waist>=34 && waist<=36){
                document.getElementById("recommendedSize").innerHTML = "Recommended size: XXL/XXXL";
            }
            else if(underBust>=39 && underBust<=41 && waist>=37 && waist<=39){
                document.getElementById("recommendedSize").innerHTML = "Recommended size: XXXL/XXXXL";
            }
            else{
                document.getElementById("recommendedSize").innerHTML = "Please contact us for custom size";
                $("[data-toggle = modal]").trigger({ type: "click" });
            }
        break;
        case "bustWaist1":
        case "bustWaist2":
        case "bustWaist3":
            if(bust>=30 && bust<=32 && waist>=24 && waist<=25){
                document.getElementById("recommendedSize").innerHTML = "Recommended size: XS/S";
            }
            else if(bust>=32 && bust<=34 && waist>=25 && waist<=26){
                document.getElementById("recommendedSize").innerHTML = "Recommended size: S/M";
            }
            else if(bust>=34 && bust<=36 && waist>=26 && waist<=28){
                document.getElementById("recommendedSize").innerHTML = "Recommended size: M/L";
            }
            else if(bust>=36 && bust<=38 && waist>=28 && waist<=30){
                document.getElementById("recommendedSize").innerHTML = "Recommended size: L/XL";
            }
            else if(bust>=39 && bust<=42 && waist>=31 && waist<=33){
                document.getElementById("recommendedSize").innerHTML = "Recommended size: XL/XXL";
            }
            else if(bust>=42 && bust<=44 && waist>=34 && waist<=36){
                document.getElementById("recommendedSize").innerHTML = "Recommended size: XXL/XXXL";
            }
            else if(bust>=45 && bust<=47 && waist>=37 && waist<=39){
                document.getElementById("recommendedSize").innerHTML = "Recommended size: XXXL/XXXXL";
            }
            else{
                document.getElementById("recommendedSize").innerHTML = "Please contact us for custom size";
                $("[data-toggle = modal]").trigger({ type: "click" });
            }
        break;

     

        case "underBust1":
        case "underBust2":
        case "underBust3":
        case "waistOnlyRibbon4":
            // alert("jaaaaaaadu");

                if (underBust>=26 && underBust<=28){
                    document.getElementById("recommendedSize").innerHTML = "Recommended size: XS/S";
                }
                else if (underBust>=28 && underBust<=30){
                    document.getElementById("recommendedSize").innerHTML = "Recommended size: S/M";
                }
                else if (underBust>=30 && underBust<=32){
                    document.getElementById("recommendedSize").innerHTML = "Recommended size: M/L";
                }
                else if (underBust>=33 && underBust<=35){
                    document.getElementById("recommendedSize").innerHTML = "Recommended size: L/XL";
                }
                else if (underBust>=35 && underBust<=37){
                    document.getElementById("recommendedSize").innerHTML = "Recommended size: XL/XXL";
                }
                else if (underBust>=37 && underBust<=39){
                    document.getElementById("recommendedSize").innerHTML = "Recommended size: XXL/XXXL";
                }
                else if (underBust>=39 && underBust<=41){
                    document.getElementById("recommendedSize").innerHTML = "Recommended size: XXXL/XXXXL";
                }
                else{
                    document.getElementById("recommendedSize").innerHTML = "Please contact us for custom size";
                    $("[data-toggle = modal]").trigger({ type: "click" });
                }
        break;
        
        case "underBustUpperHip1":
        case "underBustUpperHip2":
        case "underBustUpperHip3":
        case "underBustUpperHip4":
        case "underBustUpperHip5":

                    if((underBust>=26 && underBust<=28) && (upperHip>=29 && upperHip<=31)){
                        document.getElementById("recommendedSize").innerHTML = "Recommended size: XS/S";
                    }
                    else if((underBust>=28 && underBust<=30) && (upperHip>=31 && upperHip<=33)){
                        document.getElementById("recommendedSize").innerHTML = "Recommended size: S/M";
                    }
                    else if((underBust>=30 && underBust<=32) && (upperHip>=33 && upperHip<=35)){
                        document.getElementById("recommendedSize").innerHTML = "Recommended size: M/L";
                    }
                    else if((underBust>=33 && underBust<=35) && (upperHip>=35 && upperHip<=37)){
                        document.getElementById("recommendedSize").innerHTML = "Recommended size: L/XL";
                    }
                    else if((underBust>=35 && underBust<=37) && (upperHip>=37 && upperHip<=39)){
                        document.getElementById("recommendedSize").innerHTML = "Recommended size: XL/XXL";
                    }
                    else if((underBust>=37 && underBust<=39) && (upperHip>=39 && upperHip<=41)){
                        document.getElementById("recommendedSize").innerHTML = "Recommended size: XXL/XXXL";
                    }
                    else if((underBust>=39 && underBust<=41) && (upperHip>=41 && upperHip<=43)){
                        document.getElementById("recommendedSize").innerHTML = "Recommended size: XXXL/XXXXL";
                    }
                    else{
                        document.getElementById("recommendedSize").innerHTML = "Please contact us for custom size";
                        $("[data-toggle = modal]").trigger({ type: "click" });
                    }
        break;
        case "underBustWaistUpperHip1":
            if ((underBust>=26 && underBust<=28) && (waist>=24 && waist<=25) && (upperHip>=29 && upperHip<=31)){
                 document.getElementById("recommendedSize").innerHTML = "Recommended size: XS/S";
             }
             else if ((underBust>=28 && underBust<=30) && (waist>=25 && waist<=26) && (upperHip>=31 && upperHip<=33)){
                 document.getElementById("recommendedSize").innerHTML = "Recommended size: S/M";
             }
             else if ((underBust>=30 && underBust<=32) && (waist>=26 && waist<=28) && (upperHip>=33 && upperHip<=35)){
                 document.getElementById("recommendedSize").innerHTML = "Recommended size: M/L";
             }
             else if ((underBust>=32 && underBust<=34) && (waist>=28 && waist<=30) && (upperHip>=35 && upperHip<=37)){
                 document.getElementById("recommendedSize").innerHTML = "Recommended size: L/XL";
             }
             else if ((underBust>=35 && underBust<=37) && (waist>=31 && waist<=33) && (upperHip>=37 && upperHip<=39)){
                 document.getElementById("recommendedSize").innerHTML = "Recommended size: XL/XXL";
             }
             else if ((underBust>=37 && underBust<=39) && (waist>=34 && waist<=36) && (upperHip>=39 && upperHip<=41)){
                 document.getElementById("recommendedSize").innerHTML = "Recommended size: XXL/XXXL";
             }
             else if ((underBust>=39 && underBust<=41) && (waist>=37 && waist<=39) && (upperHip>=41 && upperHip<=43)){
                 document.getElementById("recommendedSize").innerHTML = "Recommended size: XXXL/XXXXL";
             }
             else{
                 document.getElementById("recommendedSize").innerHTML = "Please contact us for custom size";
                $("[data-toggle = modal]").trigger({ type: "click" });
             }
        break;
        case "bust1":
        case "bust2":
        case "bust3":
        case "bust4":
        case "bustUnderBustHell1":
        case "bustWaistSheer2":
        case "bustUpperHipNeko2":
            // alert("jingle");

            if (bust>=30 && bust<=32) {
                document.getElementById("recommendedSize").innerHTML = "Recommended size: XS/S";
            }
            else if (bust>=32 && bust<=34) {
                document.getElementById("recommendedSize").innerHTML = "Recommended size: S/M";
            }
            else if (bust>=34 && bust<=36) {
                document.getElementById("recommendedSize").innerHTML = "Recommended size: M/L";
            }
            else if (bust>=36 && bust<=38) {
                document.getElementById("recommendedSize").innerHTML = "Recommended size: L/XL";
            }
            else if (bust>=39 && bust<=42) {
                document.getElementById("recommendedSize").innerHTML = "Recommended size: XL/XXL";
            }
            else if (bust>=42 && bust<=44) {
                document.getElementById("recommendedSize").innerHTML = "Recommended size: XXL/XXXL";
            }
            else if (bust>=44 && bust<=47) {
                document.getElementById("recommendedSize").innerHTML = "Recommended size: XXXL/XXXXL";
            }
            else{
                document.getElementById("recommendedSize").innerHTML = "Please contact us for custom size";
                $("[data-toggle = modal]").trigger({ type: "click" });
            }
        break;
        case "hip1":
            if (hip>=32 && hip<=34 ) {
                document.getElementById("recommendedSize").innerHTML = "Recommended size: XS/S";
            }
            else if (hip>=34 && hip<=36) {
                document.getElementById("recommendedSize").innerHTML = "Recommended size: S/M";
            }
            else if (hip>=36 && hip<=38) {
                document.getElementById("recommendedSize").innerHTML = "Recommended size: M/L";
            }
            else if (hip>=38 && hip<=40) {
                document.getElementById("recommendedSize").innerHTML = "Recommended size: L/XL";
            }
            else if (hip>=41 && hip<=43) {
                document.getElementById("recommendedSize").innerHTML = "Recommended size: XL/XXL";
            }
            else if (hip>=44 && hip<=46) {
                document.getElementById("recommendedSize").innerHTML = "Recommended size: XXL/XXXL";
            }
            else if (hip>=47 && hip<=49) {
                document.getElementById("recommendedSize").innerHTML = "Recommended size: XXXL/XXXXL";
            }
            else{
                document.getElementById("recommendedSize").innerHTML = "Please contact us for custom size";
                $("[data-toggle = modal]").trigger({ type: "click" });
            }
            break;
            case "bustHip1":
            case "bustHip2":
            case "bustHip3":
                    if ((bust>=30 && bust<=32) && (hip>=32 && hip<=34)){
                        document.getElementById("recommendedSize").innerHTML = "Recommended size: XS/S";
                    }
                    else if ((bust>=32 && bust<=34) && (hip>=34 && hip<=36)){
                        document.getElementById("recommendedSize").innerHTML = "Recommended size: S/M";
                    }
                    else if ((bust>=34 && bust<=36) && (hip>=36 && hip<=38)){
                        document.getElementById("recommendedSize").innerHTML = "Recommended size: M/L";
                    }
                    else if ((bust>=36 && bust<=38) && (hip>=38 && hip<=40)){
                        document.getElementById("recommendedSize").innerHTML = "Recommended size: L/XL";
                    }
                    else if ((bust>=39 && bust<=42) && (hip>=41 && hip<=43)){
                        document.getElementById("recommendedSize").innerHTML = "Recommended size: XL/XXL";
                    }
                    else if ((bust>=42 && bust<=44) && (hip>=44 && hip<=46)){
                        document.getElementById("recommendedSize").innerHTML = "Recommended size: XXL/XXXL";
                    }
                    else if ((bust>=45 && bust<=47) && (hip>=47 && hip<=49)){
                        document.getElementById("recommendedSize").innerHTML = "Recommended size: XXXL/XXXXL";
                    }
                    else{
                        document.getElementById("recommendedSize").innerHTML = "Please contact us for custom size";
                        $("[data-toggle = modal]").trigger({ type: "click" });
                    }
            break; 

            case "upperHipHip1":
                if (upperHip>=29 && upperHip<=31 && hip>=32 && hip<=34){
                    document.getElementById("recommendedSize").innerHTML = "Recommended size: XS/S";
                }
                else if (upperHip>=31 && upperHip<=33 && hip>=34 && hip<=36){
                    document.getElementById("recommendedSize").innerHTML = "Recommended size: S/M";
                }
                else if (upperHip>=33 && upperHip<=35 && hip>=36 && hip<=38){
                    document.getElementById("recommendedSize").innerHTML = "Recommended size: M/L";
                }
                else if (upperHip>=35 && upperHip<=37 && hip>=38 && hip<=40){
                    document.getElementById("recommendedSize").innerHTML = "Recommended size: L/XL";
                }
                else if (upperHip>=37 && upperHip<=39 && hip>=41 && hip<=43){
                    document.getElementById("recommendedSize").innerHTML = "Recommended size: XL/XXL";
                }
                else if (upperHip>=39 && upperHip<=41 && hip>=44 && hip<=46){
                    document.getElementById("recommendedSize").innerHTML = "Recommended size: XXL/XXXL";
                }
                else if (upperHip>=41 && upperHip<=43 && hip>=47 && hip<=49){
                    document.getElementById("recommendedSize").innerHTML = "Recommended size: XXXL/XXXXL";
                }
                else{
                    document.getElementById("recommendedSize").innerHTML = "Please contact us for custom size";
                    $("[data-toggle = modal]").trigger({ type: "click" });
                }
            break;
            case "waistOnly1":
            case "waistOnly2":
            case "waistOnly3":
            case "waistOnly4":
            case "waistOnly5":
            case "waistOnly6":
                    // alert("jingle");
                        if (waist>=24 && waist<=25){
                            document.getElementById("recommendedSize").innerHTML = "Recommended size: XS/S";
                        }
                        else if (waist>=25 && waist<=26){
                            document.getElementById("recommendedSize").innerHTML = "Recommended size: S/M";
                        }
                        else if (waist>=26 && waist<=28){
                            document.getElementById("recommendedSize").innerHTML = "Recommended size: M/L";
                        }
                        else if (waist>=28 && waist<=30){
                            document.getElementById("recommendedSize").innerHTML = "Recommended size: L/XL";
                        }
                        else if (waist>=31 && waist<=33){
                            document.getElementById("recommendedSize").innerHTML = "Recommended size: XL/XXL";
                        }
                        else if (waist>=34 && waist<=36){
                            document.getElementById("recommendedSize").innerHTML = "Recommended size: XXL/XXXL";
                        }
                        else if (waist>=37 && waist<=39){
                            document.getElementById("recommendedSize").innerHTML = "Recommended size: XXXL/XXXXL";
                        }
                        else{
                            document.getElementById("recommendedSize").innerHTML = "Please contact us for custom size";
                             $("[data-toggle = modal]").trigger({ type: "click" });
                        }
            break;


            case "bustUpperHip1":
            case "bustUpperHip2":
            
                // alert("jumble");

                        if((bust>=26 && bust<=28) && (upperHip>=29 && upperHip<=31)){
                            document.getElementById("recommendedSize").innerHTML = "Recommended size: XS/S";
                        }
                        else if((bust>=28 && bust<=30) && (upperHip>=31 && upperHip<=33)){
                            document.getElementById("recommendedSize").innerHTML = "Recommended size: S/M";
                        }
                        else if((bust>=30 && bust<=32) && (upperHip>=33 && upperHip<=35)){
                            document.getElementById("recommendedSize").innerHTML = "Recommended size: M/L";
                        }
                        else if((bust>=33 && bust<=35) && (upperHip>=35 && upperHip<=37)){
                            document.getElementById("recommendedSize").innerHTML = "Recommended size: L/XL";
                        }
                        else if((bust>=35 && bust<=37) && (upperHip>=37 && upperHip<=39)){
                            document.getElementById("recommendedSize").innerHTML = "Recommended size: XL/XXL";
                        }
                        else if((bust>=37 && bust<=39) && (upperHip>=39 && upperHip<=41)){
                            document.getElementById("recommendedSize").innerHTML = "Recommended size: XXL/XXXL";
                        }
                        else if((bust>=39 && bust<=41) && (upperHip>=41 && upperHip<=43)){
                            document.getElementById("recommendedSize").innerHTML = "Recommended size: XXXL/XXXXL";
                        }
                        else{
                            document.getElementById("recommendedSize").innerHTML = "Please contact us for custom size";
                            $("[data-toggle = modal]").trigger({ type: "click" });
                        }
            break;
               
            case "underBustUpperHipThigh1":
            case "underBustUpperHipSwim3":
                if (underBust>=26 && underBust<=28){
                    document.getElementById("recommendedSize").innerHTML = "Recommended size: XS/S";
                }
                else if (underBust>=28 && underBust<=30){
                    document.getElementById("recommendedSize").innerHTML = "Recommended size: S/M";
                }
                else if (underBust>=30 && underBust<=32){
                    document.getElementById("recommendedSize").innerHTML = "Recommended size: M/L";
                }
                else if (underBust>=32 && underBust<=35){
                    document.getElementById("recommendedSize").innerHTML = "Recommended size: L/XL";
                }
                else if (underBust>=35 && underBust<=37){
                    document.getElementById("recommendedSize").innerHTML = "Recommended size: XL/XXL";
                }
                else if (underBust>=37 && underBust<=39){
                    document.getElementById("recommendedSize").innerHTML = "Recommended size: XXL/XXXL";
                }
                else if (underBust>=39 && underBust<=41){
                    document.getElementById("recommendedSize").innerHTML = "Recommended size: XXXL/XXXXL";
                }
                else{
                    document.getElementById("recommendedSize").innerHTML = "Please contact us for custom size";
                    $("[data-toggle = modal]").trigger({ type: "click" });
                }
            break;
        case "bustWaistHip1":               
        case "bustWaistHip2":
        case "bustWaistHip3":
        case "bustWaistHip4":
        case "bustWaistHip5":
            // alert("jump");
            if(bust>=30 && bust<=32 && waist>=24 && waist<=25 && hip>=32 && hip<=34){
                document.getElementById("recommendedSize").innerHTML = "Recommended size: XS/S";
            }
            else if(bust>=32 && bust<=34 && waist>=25 && waist<=26 && hip>=34 && hip<=36){
                document.getElementById("recommendedSize").innerHTML = "Recommended size: S/M";
            }
            else if(bust>=34 && bust<=36 && waist>=26 && waist<=28 && hip>=36 && hip<=38){
                document.getElementById("recommendedSize").innerHTML = "Recommended size: M/L";
            }
            else if(bust>=36 && bust<=38 && waist>=28 && waist<=30 && hip>=38 && hip<=40){
                document.getElementById("recommendedSize").innerHTML = "Recommended size: L/XL";
            }
            else if(bust>=39 && bust<=42 && waist>=31 && waist<=33 && hip>=41 && hip<=43){
                document.getElementById("recommendedSize").innerHTML = "Recommended size: XL/XXL";
            }
            else if(bust>=42 && bust<=44 && waist>=34 && waist<=36 && hip>=44 && hip<=46){
                document.getElementById("recommendedSize").innerHTML = "Recommended size: XXL/XXXL";
            }
            else if(bust>=45 && bust<=47 && waist>=37 && waist<=39 && hip>=47 && hip<=49){
                document.getElementById("recommendedSize").innerHTML = "Recommended size: XXXL/XXXXL";
            }
            else{
                document.getElementById("recommendedSize").innerHTML = "Please contact us for custom size";
                $("[data-toggle = modal]").trigger({ type: "click" });
            }
        break;
        case "waistUpperHip1":
        case "waistUpperHip2":
            if ((waist>=24 && waist<=25) && (upperHip>=29 && upperHip<=31)){
                document.getElementById("recommendedSize").innerHTML = "Recommended size: XS/S";
            }
            else if ((waist>=25 && waist<=26) && (upperHip>=31 && upperHip<=33)){
                document.getElementById("recommendedSize").innerHTML = "Recommended size: S/M";
            }
            else if ((waist>=26 && waist<=28) && (upperHip>=33 && upperHip<=35)){
                document.getElementById("recommendedSize").innerHTML = "Recommended size: M/L";
            }
            else if ((waist>=28 && waist<=30) && (upperHip>=35 && upperHip<=37)){
                document.getElementById("recommendedSize").innerHTML = "Recommended size: L/XL";
            }
            else if ((waist>=31 && waist<=33) && (upperHip>=37 && upperHip<=39)){
                document.getElementById("recommendedSize").innerHTML = "Recommended size: XL/XXL";
            }
            else if ((waist>=34 && waist<=36) && (upperHip>=39 && upperHip<=41)){
                document.getElementById("recommendedSize").innerHTML = "Recommended size: XXL/XXXL";
            }
            else if ((waist>=37 && waist<=39) && (upperHip>=41 && upperHip<=43)){
                document.getElementById("recommendedSize").innerHTML = "Recommended size: XXXL/XXXXL";
            }
            else{
                document.getElementById("recommendedSize").innerHTML = "Please contact us for custom size";
                 $("[data-toggle = modal]").trigger({ type: "click" });
            }
        break;
        default:
                //hide all the measurements
                document.getElementById("recommendedSize").innerHTML = "Please contact us for custom size";
                $("[data-toggle = modal]").trigger({ type: "click" });
                break;
        }
           // New end ho gaya hia

}
    // code to check sizes of the product ends 



function ok(){
    $("[data-dismiss=modal]").trigger({ type: "click" });
    document.getElementById("form").classList.remove("d-none");
}
//code to get details of user for custom sizes
function done(){
    
    // alert("done");
    //new sending acknowledgment email to the user
    let productName = selectedItemName;
    let upperHipNew = document.getElementById("upperHipNew").value;
    let underBustNew = document.getElementById("underBustNew").value;
    let WaistNew = document.getElementById("waistNew").value;
    let HipNew = document.getElementById("hipNew").value;
    let bustNew = document.getElementById("bustNew").value;
    let email = document.getElementById("userEmail").value;

    let subject = "Custom Size Request";


    // alert(productName + upperHipNew+underBustNew+WaistNew+HipNew+bustNew)


    sendEmail(subject,productName,upperHipNew,underBustNew,WaistNew,HipNew,bustNew,email);

     document.getElementById("form").classList.add("d-none");
}
//code to get details of user for custom sizes end

//code to send mail from user for custom size

function sendEmail(subject,productName,upperHipNew,underBustNew,WaistNew,HipNew,bustNew,email) {

    $.ajax({
        type: "POST",
        url: "./mail-withoutBrokerFee.php",
        data: {
            name: "Usama Faheem Ahmed",
            email: "usamafaheemahmed80@gmail.com",
            subject: subject,
            productName: productName,
            upperHipNew: upperHipNew,
            underBustNew: underBustNew,
            WaistNew: WaistNew,
            HipNew: HipNew,
            bustNew: bustNew,
            email: email,
        },
        success: function (data) {
            console.log(data);
        },
        error: function (data) {
            console.log(data);
        }
    });
    
    
}
//code to send mail from user for custom size





function upDownIcon(){
    let up = document.getElementById("up");
    let down = document.getElementById("down");

    if (up.classList.contains("d-none")){
        up.classList.remove("d-none");
        down.classList.add("d-none");
    }
    else{
        up.classList.add("d-none");
        down.classList.remove("d-none");
    }
}


function closer(){
    document.getElementById("form").classList.add("d-none");
} 