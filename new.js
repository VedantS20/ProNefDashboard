const featuredCards = [
    {
        background_image_url:"/logos/bg.png",
        actor_image_url:"/logos/ac1_large.png",
        actor_name:"Alex Tellas",
        actor_city:"California, USA"
    },
    {
        background_image_url:"/logos/bg1.png",
        actor_image_url:"/logos/ac2_large.png",
        actor_name:"Putri Intan",
        actor_city:"Jakarta, INA"
    },
    {
        background_image_url:"/logos/bg2.png",
        actor_image_url:"/logos/ac3_large.png",
        actor_name:"George Find",
        actor_city:"New York, USA"
    },
    {
        background_image_url:"/logos/bg.png",
        actor_image_url:"/logos/ac4_large.png",
        actor_name:"Sarah Sofia",
        actor_city:"Moscow, RUS"
    }
];


const feed_cards = [
    {
        background_image_url:"/logos/bg.png",
        ending_time:"10h 20m",
        feed_name:"Abstracto #212",
        feed_by:"by Putri Intan",
    },
    {
        background_image_url:"/logos/bg1.png",
        ending_time:"12h 30m",
        feed_name:"Abstracto #312",
        feed_by:"by Putri Intan",
    },
    {
        background_image_url:"/logos/bg2.png",
        ending_time:"14h 45m",
        feed_name:"Abstracto #412",
        feed_by:"by Putri Intan",
    }
]

const top_drops = [
    {
        icon_url:"/logos/ac1_small.png",
        name:"Geomatro #888",
        sold_at:"Sold at 5.42 ETH",
        seen_at:"Just Now"
    },
    {
        icon_url:"/logos/ac2_small.png",
        name:"Geomatro #888",
        sold_at:"Sold at 5.42 ETH",
        seen_at:"1h ago"
    },
    {
        icon_url:"/logos/ac3_small.png",
        name:"Geomatro #888",
        sold_at:"Sold at 5.42 ETH",
        seen_at:"2h ago"
    },
]

const history_cards = [
    {
        icon_url:"/logos/ac1_small.png",
        name:"BostonHype NFT Sold",
        sold_at:"Sold at 1.42 ETH",
        seen_at:"Just Now"
    },
    {
        icon_url:"/logos/ac2_small.png",
        name:"New NFT uploaded",
        sold_at:"by Volia Tarmin",
        seen_at:"1h ago"
    },
    {
        icon_url:"/logos/ac3_small.png",
        name:"You followed an artist",
        sold_at:"Jussica Tan",
        seen_at:"Just Now"
    },
    {
        icon_url:"/logos/ac4_small.png",
        name:"You followed an artist",
        sold_at:"Jussica Tan",
        seen_at:"Just Now"
    },
    {
        icon_url:"/logos/ac5_small.png",
        name:"You followed an artist",
        sold_at:"Jussica Tan",
        seen_at:"Just Now"
    },
]

// document.querySelector('.bg').style.backgroundImage = 'url('+featuredCards[0].background_image_url+')';

for(let i=0;i<featuredCards.length;i++){
    document.querySelector(".featured").innerHTML += `
<div class="artist">
<div class="bg" style="background:url(${featuredCards[i].background_image_url});"></div>
<div class="artist-img" style="background:url('${featuredCards[i].actor_image_url}')"></div>
<h2 class="artist-name">${featuredCards[i].actor_name}</h2>
<h5 class="artist-city">${featuredCards[i].actor_city}</h5>
<button class="artist-follow">Follow <i class="fas fa-plus"></i></button>
</div>
`
}


for(let i=0;i<feed_cards.length;i++){
 document.querySelector('.feed').innerHTML += `
 <div class = "feed-card">
 <div class="feed-bg" style="background:url(${feed_cards[i].background_image_url});"></div>
 <div class="feed-like"><i id="icon" class="far fa-heart"></i></div>
 <div class="timer">
   <h4>Ending in</h4>
   <h3>${feed_cards[i].ending_time}</h3>
 </div>
 <div class="artists-icons">
   <div class="artist-icon1"></div>
   <div class="artist-icon2"></div>
   <div class="artist-icon3"></div>
 </div>
 <div class="feed-posted-info">
   <h2 class="feed-name">${feed_cards[i].feed_name}</h2>
   <h4 class="feed-posted-by">${feed_cards[i].feed_by}</h4>
 </div>
 <div class="feed-footer">
   <input class="feed-number" type="number" dir="rtl">
   <button class="feed-place-btn">Place a bid</button>
 </div>
</div>
 
 
 `   
}

for(let i=0;i<top_drops.length;i++){
        document.querySelector('.topdrop').innerHTML += `
        <div class="topdrop-item">
                    <div class="artist-logo" style="background:url(${top_drops[i].icon_url});"></div>
                    <div class="item-info">
                        <h2>${top_drops[i].name}</h2>
                        <h5>${top_drops[i].sold_at}</h5>
                    </div>
                    <h5>${top_drops[i].seen_at}</h5>
                </div>
    `   
}