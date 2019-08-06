const express= require("express");
const app = express();
const port = 80;

// define a route handler for the default home page
app.get( "/", ( req:any, res:any ) => {
    res.send( "Welcome to the Chester Zoo test server." );
} );

app.get('/update_check', (req: any, res: any) =>
{
    res.json(
        {
            "last_modified": "2019-07-30 14:44:58"
        }
    )
})

app.get("/config", (req:any, res: any) => {
    res.json(
        {
            "opening_times":
            [
                {
                    "date_from": "2019-07-30",
                    "date_to": "2019-10-30",
                    "time_open": "9:00",
                    "time_close": "18:00"
                },
                {
                    "date_from": "2019-11-20",
                    "date_to": "2019-11-25",
                    "time_open": "10:00",
                    "time_close": "17:00"
                }
            ],
            "featured_event":
            {
                "title": "BIG CATS made with Lego® brick",
                "url": "https://chesterzoo.org"
            },
            "marker_groups":
            [
                {
                    "title": "Animals",
                    "id": 1,
                    "icon": "https://someimageurl/animals.png"
                },
                {
                    "title": "Areas",
                    "id": 2,
                    "icon": "https://someimageurl/areas.png"
                },
                {
                    "title": "Food & Drink",
                    "id": 3,
                    "icon": "https://someimageurl/food_drink.png"
                },
                {
                    "title": "Fun & Games",
                    "id": 4,
                    "icon": "https://someimageurl/fun_games.png"
                },
                {
                    "title": "Play Areas",
                    "id": 5,
                    "icon": "https://someimageurl/play_areas.png"
                },
                {
                    "title": "Shopping",
                    "id": 6,
                    "icon": "https://someimageurl/shpping.png"
                }
            ],
            "markers":
            [
                {
                    "title": "Food court",
                    "id": 1,
                    "group_id": 6,
                    "times": "8am-8pm",
                    "more_url": "https://features/food_court.html",
                    "show_share": true,
                    "latitude": 53.241231,
                    "longitude": -2.0166459,
                    "keywords": ["food", "court", "eat"]
                },
                {
                    "title": "Penguins",
                    "id": 2,
                    "group_id": 1,
                    "times": "10am-6pm",
                    "more_url": "https://features/penguins.html",
                    "show_share": true,
                    "latitude": 53.241270,
                    "longitude": -2.016651,
                    "keywords": ["penguins", "animals", "chocolate"]
                }
            ]
        }
    )
});

app.get("/plans", (req:any, res: any) => {
    res.json(
        {
            "day_plans": 
            [
                {
                    "plan_date": "2019-07-30",
                    "marker_ids": 
                    [
                        1, 2
                    ]
                }
            ]
        }
    )
});

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );
