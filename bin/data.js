"use strict";
exports.__esModule = true;
var data = [
    { "guid": "112c571a56fa4b0fa15e9422ddbb5e51.16", "title": "Epic Tractor Parts", "coordinates": { "lat": 42.990802, "lng": -89.56604 }, "link": { "intel": "https://intel.ingress.com/intel?ll=42.990802,-89.56604&z=16&pll=42.990802,-89.56604", "gmap": "https://google.com/maps/place/42.990802,-89.56604" }, "image": "http://lh3.googleusercontent.com/5JrfAlVE6iiF16hHaDe7BYeM_PBSYHqCH-irhv_SuEoEbipDj79-ZjAFcDE0cJLhugWBUGFlR6ix4AdyzkUZEW1bfxA" },
    { "guid": "ad4bff40e9aa477dad28c504add7d22f.16", "title": "Grass Dog - Epic", "coordinates": { "lat": 42.993679, "lng": -89.56546 }, "link": { "intel": "https://intel.ingress.com/intel?ll=42.993679,-89.56546&z=16&pll=42.993679,-89.56546", "gmap": "https://google.com/maps/place/42.993679,-89.56546" }, "image": "http://lh3.ggpht.com/0AQixabvp2Bm5feiKe_s6iAWnIDz55A_5GC8RbrEYy7VF2i9XBzItryXaaOzuYXFfNwZVyVD4Tc6KUe-ODlR" },
    { "guid": "4ec1d79ffa5042b09f615f9269f8320e.16", "title": "Epic - Birds in Tree", "coordinates": { "lat": 42.99331, "lng": -89.566958 }, "link": { "intel": "https://intel.ingress.com/intel?ll=42.99331,-89.566958&z=16&pll=42.99331,-89.566958", "gmap": "https://google.com/maps/place/42.99331,-89.566958" }, "image": "http://lh3.ggpht.com/fu86Hc-UmVagRu13QFfMoDsaQJ9p0YmgFPZlNzL4Ofk4D4FLxHYesbg7PLI_vAamzTdiLCUxftycz_GcJcSVUg" },
    { "guid": "4c76c9b1b3e349199ade44630b2654ef.16", "title": "Epic - Lous Soda Fountain ", "coordinates": { "lat": 42.993188, "lng": -89.567229 }, "link": { "intel": "https://intel.ingress.com/intel?ll=42.993188,-89.567229&z=16&pll=42.993188,-89.567229", "gmap": "https://google.com/maps/place/42.993188,-89.567229" }, "image": "http://lh3.googleusercontent.com/d_-y0GPNcnlXGiZg5iUZ3ARDD5lyM_DQICdYD0yLFbXw06Ijnxgh6y_0FTobafftnsy1n0CjQzXSQVgCQOSw" },
    { "guid": "a0d3e0603966447f9b8952d34127d1b5.16", "title": "Epic - Metal Crane", "coordinates": { "lat": 42.9929, "lng": -89.567113 }, "link": { "intel": "https://intel.ingress.com/intel?ll=42.9929,-89.567113&z=16&pll=42.9929,-89.567113", "gmap": "https://google.com/maps/place/42.9929,-89.567113" }, "image": "http://lh6.ggpht.com/tid7R_KrW2WfPFDfMe58aDg4VCLuZYYe5FUOZ-V7rGgPQFdl2jOK5mRqrnk0yPDvihDyIK9qQQbvWkaeFk3f" },
    { "guid": "7d9034ca61e14044bf79458eb548bc53.16", "title": "Epic Angry Bird", "coordinates": { "lat": 42.991443, "lng": -89.566982 }, "link": { "intel": "https://intel.ingress.com/intel?ll=42.991443,-89.566982&z=16&pll=42.991443,-89.566982", "gmap": "https://google.com/maps/place/42.991443,-89.566982" }, "image": "http://lh6.ggpht.com/oMmRXCm2beGtJL5Ts2RkqD_HR2DLgyUghsd8nVc1IUMDGz6UAiD1le_-JVoLJXVpBVn2xqLznhWMPAs_1iZ6" },
    { "guid": "e79fc710071447ea9b5f62e8aae3cecc.16", "title": "Epic - Stone and Wire Flowers", "coordinates": { "lat": 42.99452, "lng": -89.566211 }, "link": { "intel": "https://intel.ingress.com/intel?ll=42.99452,-89.566211&z=16&pll=42.99452,-89.566211", "gmap": "https://google.com/maps/place/42.99452,-89.566211" }, "image": "http://lh5.ggpht.com/wmrXKPzVoWLy-Dpsxc0T9O4-DSYUzRjbryksHkJQu3wGEBnP00admFW4RUJ-isKKFisRAW1EKXj3WNrUq7gY" },
    { "guid": "aee13812b20443e7b4921b9e7809d8aa.16", "title": "Epic Headquarters ", "coordinates": { "lat": 42.994605, "lng": -89.565546 }, "link": { "intel": "https://intel.ingress.com/intel?ll=42.994605,-89.565546&z=16&pll=42.994605,-89.565546", "gmap": "https://google.com/maps/place/42.994605,-89.565546" }, "image": "http://lh5.ggpht.com/juAUpZ5yR9Y1mzh3ajYFbjz5QOnO5-fFEz3Vy1gg9sIRChvoU0zpsBxfwVB7Ifu-S-CiVR1cNcyXDuL1hT8" },
    { "guid": "81e9bdeef4fc44a4ab7ada9dbe5038a8.16", "title": "Epic - Metal Tulip", "coordinates": { "lat": 42.994598, "lng": -89.565925 }, "link": { "intel": "https://intel.ingress.com/intel?ll=42.994598,-89.565925&z=16&pll=42.994598,-89.565925", "gmap": "https://google.com/maps/place/42.994598,-89.565925" }, "image": "http://lh5.ggpht.com/ahCyyA21QAmGW9Qa24-dHIZ9vrb7mvFOUgaNKc53K_Hw2GqtAUILaVTMBrQXI6FbEznBxwh3FPA-iZDJMuYs" },
    { "guid": "5da8038f7cd14a05bb5500f975c914d3.16", "title": "Epic - Waterfall - Front", "coordinates": { "lat": 42.992872, "lng": -89.567381 }, "link": { "intel": "https://intel.ingress.com/intel?ll=42.992872,-89.567381&z=16&pll=42.992872,-89.567381", "gmap": "https://google.com/maps/place/42.992872,-89.567381" }, "image": "http://lh3.ggpht.com/AE6Yid5E9DDPrm9r8Qg3q4FHD7nFf-3e1cUApxUWMV26s2c9V9ZO7oB3Q2M7IscHTT06viiNJoLqqVuNgrcu" },
    { "guid": "9ddc9bb982d4495ebbd292c72d45237b.16", "title": "Epic - The Treehouse", "coordinates": { "lat": 42.992042, "lng": -89.565353 }, "link": { "intel": "https://intel.ingress.com/intel?ll=42.992042,-89.565353&z=16&pll=42.992042,-89.565353", "gmap": "https://google.com/maps/place/42.992042,-89.565353" }, "image": "http://lh3.ggpht.com/FtSUNZTb7kjnOq3KxKxZc6UKfQc3W2JEu1eZauWQKjSFK_GoTHEgHi9xjz5PEo1EILFPJ7C096fW88cfNjU" },
    { "guid": "993e622f89db446fa246f52735c520e6.16", "title": "Epic - White Fin", "coordinates": { "lat": 42.993172, "lng": -89.566436 }, "link": { "intel": "https://intel.ingress.com/intel?ll=42.993172,-89.566436&z=16&pll=42.993172,-89.566436", "gmap": "https://google.com/maps/place/42.993172,-89.566436" }, "image": "http://lh6.ggpht.com/0s_BIKP1wA2yoJDYfIQ7EDysNO0sD7dzq7t6Z1duLbj1TlIKKFjA7qdTCJ-KGi9bbqmS7l5cIw5MfGFPw8k" },
    { "guid": "bb4fcefa2a2d4ee7be19def1b7125bca.16", "title": "Epic - Herons Sculpture", "coordinates": { "lat": 42.992859, "lng": -89.567948 }, "link": { "intel": "https://intel.ingress.com/intel?ll=42.992859,-89.567948&z=16&pll=42.992859,-89.567948", "gmap": "https://google.com/maps/place/42.992859,-89.567948" }, "image": "http://lh4.ggpht.com/dKLhBBy3fafQB3jVE-JhIadW7hjFjgQop2tkoDA_pY8VOLcHYqt1Ssrb3IO7Nrtx5lfJs9TAlCBZIn5wKOI" },
    { "guid": "675f8bdac8954d018ddafebacaa581ad.16", "title": "Epic - Wind-Flowers", "coordinates": { "lat": 42.991195, "lng": -89.565587 }, "link": { "intel": "https://intel.ingress.com/intel?ll=42.991195,-89.565587&z=16&pll=42.991195,-89.565587", "gmap": "https://google.com/maps/place/42.991195,-89.565587" }, "image": "http://lh5.ggpht.com/i_Fxmcvk6gR8bHHCiiXEt8pLD-GB0HXIiCscvHpYQuVXRJ7IobBPprJpwr_yjTfExj33W2BFrAYaO_ad43cy" },
    { "guid": "968f149960f3444a9fc05213f6b8982d.16", "title": "Epic - Peacock ", "coordinates": { "lat": 42.9946, "lng": -89.566659 }, "link": { "intel": "https://intel.ingress.com/intel?ll=42.9946,-89.566659&z=16&pll=42.9946,-89.566659", "gmap": "https://google.com/maps/place/42.9946,-89.566659" }, "image": "http://lh6.ggpht.com/3UoyBxrS6Ndmnqz1kPYc8bPbaDjepmorEeQry4xBNv1NdDwrW23AYieJI9AiW_rI4BXlSosFqfUr-hSQktgvEg" },
    { "guid": "cb31c4d7b0d14b5a8fad2feb66e3fd77.16", "title": "Epic - Wire Horse", "coordinates": { "lat": 42.993485, "lng": -89.56782 }, "link": { "intel": "https://intel.ingress.com/intel?ll=42.993485,-89.56782&z=16&pll=42.993485,-89.56782", "gmap": "https://google.com/maps/place/42.993485,-89.56782" }, "image": "http://lh6.ggpht.com/0j7WCKpshUlxaTRTwv8ycJHJwkF4QCPSnFStRZ2bNWQSYLYbB59glbpRS3N5yu9WREuHl1mxRahkLQ5Xqq2k" },
    { "guid": "8853c918d43e46539c3c9f277da8eaf1.16", "title": "Epic - Elephant Fountain", "coordinates": { "lat": 42.993806, "lng": -89.566132 }, "link": { "intel": "https://intel.ingress.com/intel?ll=42.993806,-89.566132&z=16&pll=42.993806,-89.566132", "gmap": "https://google.com/maps/place/42.993806,-89.566132" }, "image": "http://lh6.ggpht.com/l4FEz-Fp_QrF3ORdZ3FaYNI9sIIof-bIjo2YJf3rgJ1Px7o4tSs5lAlUC6QuFikwwDoP9XEkPqzwyG69TZ0_" },
    { "guid": "9c8356c648e8425ba91f8345f548e86e.16", "title": "Epic - Indiana Jones Tunnel", "coordinates": { "lat": 42.992709, "lng": -89.566251 }, "link": { "intel": "https://intel.ingress.com/intel?ll=42.992709,-89.566251&z=16&pll=42.992709,-89.566251", "gmap": "https://google.com/maps/place/42.992709,-89.566251" }, "image": "http://lh4.ggpht.com/FtxaktJQtrQOqVeJI-J2JCv9Xc4bDjn9B2pg3Q-VOpvgURahgeEt-_iWFzHC9FuYDqz6opI8UjXDF6y4y7oJ" },
    { "guid": "55475177c3354076b70e9f63b19aef8b.16", "title": "Epic - Borealis", "coordinates": { "lat": 42.993642, "lng": -89.56678 }, "link": { "intel": "https://intel.ingress.com/intel?ll=42.993642,-89.56678&z=16&pll=42.993642,-89.56678", "gmap": "https://google.com/maps/place/42.993642,-89.56678" }, "image": "http://lh6.ggpht.com/EL97oYoirWikK6Ye0X0zp8pYL_0euJMGrPIKXERy3qaTqlRh-q1Y2azn5fheTDhgicLzS2XhjWSbH-3-r0Bo" },
    { "guid": "2f64b7fbe2924a2982687748536d4364.16", "title": "Epic - Windmill Tree", "coordinates": { "lat": 42.993797, "lng": -89.566516 }, "link": { "intel": "https://intel.ingress.com/intel?ll=42.993797,-89.566516&z=16&pll=42.993797,-89.566516", "gmap": "https://google.com/maps/place/42.993797,-89.566516" }, "image": "http://lh4.ggpht.com/Y8-oM0Ha8y2VZ9QAMCDfwgpO7-S30ht-A7mQtyrlNdma_E9duIaquxN1oKop3J8L6PCSVhRClp7GsEb7srrVBw" },
    { "guid": "5648873a489d40f68db04228501a46d3.16", "title": "Epic - Fomalhaut", "coordinates": { "lat": 42.993156, "lng": -89.565765 }, "link": { "intel": "https://intel.ingress.com/intel?ll=42.993156,-89.565765&z=16&pll=42.993156,-89.565765", "gmap": "https://google.com/maps/place/42.993156,-89.565765" }, "image": "http://lh3.ggpht.com/ig1923XkyfD8PWxjn65N67yAj4NEWvZaOYkco5mfJog0xTNlYwGQtrdNP0NqNrk_yUSTtk4mROjs_uEJrK0" },
    { "guid": "60e5c55f4cc1494bad96d1eed31ebf68.16", "title": "Epic - Wilbur", "coordinates": { "lat": 42.991074, "lng": -89.567265 }, "link": { "intel": "https://intel.ingress.com/intel?ll=42.991074,-89.567265&z=16&pll=42.991074,-89.567265", "gmap": "https://google.com/maps/place/42.991074,-89.567265" }, "image": "http://lh5.ggpht.com/pmosE3ghcAA7qBwdq-Pgb_pt8EMAgwPF2z5JYcmGNX-qg4w7_2UWTr7lqR4uIe8bWTlsL-fKGmuuaZb4SPw" },
    { "guid": "dc2884407b184c7b84c0f6ee79316818.16", "title": "Epic - Elephant ", "coordinates": { "lat": 42.994175, "lng": -89.567421 }, "link": { "intel": "https://intel.ingress.com/intel?ll=42.994175,-89.567421&z=16&pll=42.994175,-89.567421", "gmap": "https://google.com/maps/place/42.994175,-89.567421" }, "image": "http://lh6.ggpht.com/bA3FU2nShCIBZZR2z3vjuBEt6ss2yVk5G3ct-k7lMtStoSzc6NuE8YFL-Ro2GVm0DASXqfDqxDxO0x8cMvVLuw" },
    { "guid": "6d76a02ec04b402d87de28b3ada5c9d0.16", "title": "Epic - Ganymede", "coordinates": { "lat": 42.993419, "lng": -89.566019 }, "link": { "intel": "https://intel.ingress.com/intel?ll=42.993419,-89.566019&z=16&pll=42.993419,-89.566019", "gmap": "https://google.com/maps/place/42.993419,-89.566019" }, "image": "http://lh3.ggpht.com/pdcGGd-GH92y5uQCkvXiCbCZZLO7a3HcdN6uXYf7fhvD9eGipitRUFeeojSFx-q7CmdqSN53c4MZovQmZSc" },
    { "guid": "0d8ee61b03224d68bdf4e957208c8c78.16", "title": "Epic - Deneb", "coordinates": { "lat": 42.992908, "lng": -89.566302 }, "link": { "intel": "https://intel.ingress.com/intel?ll=42.992908,-89.566302&z=16&pll=42.992908,-89.566302", "gmap": "https://google.com/maps/place/42.992908,-89.566302" }, "image": "http://lh5.ggpht.com/HPz4dZTy6kUUsezJLqFtpVwrvKlepXSpM7qumTUYGOoxgO4c-wRdrEDYsiwbg2JAIBSGysZ1Qw6A0LTny4Wn" },
    { "guid": "c5ec4e52b3204d85aa3a5b341aa132e4.16", "title": "Epic - Metal Moose ", "coordinates": { "lat": 42.994715, "lng": -89.567185 }, "link": { "intel": "https://intel.ingress.com/intel?ll=42.994715,-89.567185&z=16&pll=42.994715,-89.567185", "gmap": "https://google.com/maps/place/42.994715,-89.567185" }, "image": "http://lh5.ggpht.com/xz1zM1GZaLhKXfxuHn45hdtVX-XKx81sEaeKnynL4J3VMB7dr8lakPTdKsUhECQOqLr30wlaliEzDmgZynpz" },
    { "guid": "79674ec461c24aab8f9987dc7c3cf14c.16", "title": "Dragon Statue", "coordinates": { "lat": 42.994786, "lng": -89.566927 }, "link": { "intel": "https://intel.ingress.com/intel?ll=42.994786,-89.566927&z=16&pll=42.994786,-89.566927", "gmap": "https://google.com/maps/place/42.994786,-89.566927" }, "image": "http://lh3.ggpht.com/hh7EkXr2magkhidKJpA1kjfQ3Umo2hpycsNQn1K4FEXgt9ZTfPqKZyaqU1EfM7cXWO6McDSyo1CBnM5sVsrhpA" },
    { "guid": "1d4c3dce8f934fd59190246ebf8c527e.16", "title": "Epic - Andromeda - Outdoor Fireplace ", "coordinates": { "lat": 42.994723, "lng": -89.566368 }, "link": { "intel": "https://intel.ingress.com/intel?ll=42.994723,-89.566368&z=16&pll=42.994723,-89.566368", "gmap": "https://google.com/maps/place/42.994723,-89.566368" }, "image": "http://lh6.ggpht.com/8eU2wvA4B7-huG1piEzmWQBimyoAG65J9j8e4MIeBDw_Vm6VxkK6aP04RTv-j8eZu2hXldnmiiENB4IZbM4" },
    { "guid": "e62883b0aaca490fae811d18fffb9593.16", "title": "Epic - Weathervane", "coordinates": { "lat": 42.994132, "lng": -89.566527 }, "link": { "intel": "https://intel.ingress.com/intel?ll=42.994132,-89.566527&z=16&pll=42.994132,-89.566527", "gmap": "https://google.com/maps/place/42.994132,-89.566527" }, "image": "http://lh5.ggpht.com/2jgHaYcoXtExGAxhAh4fcDSlO5Pt-jJ6Db_31trLC9yAP4q7xfHhhJPBQAaZ5RqB-zKGUhkG9s-VQQz9Hvk" },
    { "guid": "f7ba1c00c7fb48a997912717bb9b2233.16", "title": "Epic Spoon Pony", "coordinates": { "lat": 42.992355, "lng": -89.567025 }, "link": { "intel": "https://intel.ingress.com/intel?ll=42.992355,-89.567025&z=16&pll=42.992355,-89.567025", "gmap": "https://google.com/maps/place/42.992355,-89.567025" }, "image": "http://lh5.ggpht.com/-wkHcUdbaILumHo_uCguSSvZimkydyuh9Cr3UKsO5g36C_O190ybTT9WgIpojhO8QbIkiqPstNIaGLlUTZ0p" },
    { "guid": "be0b872e4740413ebf59306613ed7df3.16", "title": "Epic - Barn Mailbox", "coordinates": { "lat": 42.991544, "lng": -89.567351 }, "link": { "intel": "https://intel.ingress.com/intel?ll=42.991544,-89.567351&z=16&pll=42.991544,-89.567351", "gmap": "https://google.com/maps/place/42.991544,-89.567351" }, "image": "http://lh6.ggpht.com/7_ytK8oaUNPDdauPRf13QPlkPDFZeTjd2irwthoxDjtzNgWx5o7qK1vA9lK9pKrZsGjjQA7UMn1y03ha30Zp" },
    { "guid": "112e2ea16e494da59383880ecea5d1a2.16", "title": "Epic - Farm Black Wheel", "coordinates": { "lat": 42.990432, "lng": -89.566022 }, "link": { "intel": "https://intel.ingress.com/intel?ll=42.990432,-89.566022&z=16&pll=42.990432,-89.566022", "gmap": "https://google.com/maps/place/42.990432,-89.566022" }, "image": "http://lh4.ggpht.com/DVUK3wl5Zw8yNfRIlkWBe-M-8AVS3PywSKACCqbBoT-e9ZW7gXxg5Z3AOJ88dWAowAhdsjWp5TDhEZySZes" },
    { "guid": "ce5eff7ca98a403781afedc59fbcd40d.16", "title": "Epic - Andromeda - Ceramic Mosaic Grandfather Clock", "coordinates": { "lat": 42.99445, "lng": -89.56691 }, "link": { "intel": "https://intel.ingress.com/intel?ll=42.99445,-89.56691&z=16&pll=42.99445,-89.56691", "gmap": "https://google.com/maps/place/42.99445,-89.56691" }, "image": "http://lh3.ggpht.com/rp2ASiyS8E3l7z9brSqBr70NmWrbtkE5MGDdUEZYEICgwxnRYKgH0B6oSSAfWMu-sL9Vln-7aowhZCvfqD6Bvw" },
    { "guid": "8879762e84b44cb79f92f8b87155dbb1.16", "title": "Epic - Egg Man", "coordinates": { "lat": 42.994539, "lng": -89.565126 }, "link": { "intel": "https://intel.ingress.com/intel?ll=42.994539,-89.565126&z=16&pll=42.994539,-89.565126", "gmap": "https://google.com/maps/place/42.994539,-89.565126" }, "image": "http://lh3.googleusercontent.com/hmE14FRbXPepl89a9p2JB9UPoHJ9dDhJnF_KP-RKD0eaID9xLkI2EMkuBKDE69i8rLYatwRbS4jh27kRcWaZ" },
    { "guid": "61b9147b2ec74ec18d8fde60e02a2e0d.16", "title": "Magician On Bike", "coordinates": { "lat": 42.995143, "lng": -89.569724 }, "link": { "intel": "https://intel.ingress.com/intel?ll=42.995143,-89.569724&z=16&pll=42.995143,-89.569724", "gmap": "https://google.com/maps/place/42.995143,-89.569724" }, "image": "http://lh5.ggpht.com/mP3Ruxj5DO5mUJR8rheJpylO5Kjg-0nCqSH6vgL3UgPB6Ysjsn6ABCj6mgJqYA9-14amg8w_xdwYYV_valQ-" },
    { "guid": "780845cbc0d9441e825c2b27c5298cbd.16", "title": "Epic - RinTinTin", "coordinates": { "lat": 42.995231, "lng": -89.566992 }, "link": { "intel": "https://intel.ingress.com/intel?ll=42.995231,-89.566992&z=16&pll=42.995231,-89.566992", "gmap": "https://google.com/maps/place/42.995231,-89.566992" }, "image": "http://lh3.googleusercontent.com/K13i6bDADPh9UCuQvdOknPXeE0aGdaiFlOC4yD9lstx5WN3S_EDP8p0KFTukQSS4d-7OXFWr3JiVALi25Vst" },
    { "guid": "55ec432165284773934ea0041f85cbf1.16", "title": "Epic - Gorge", "coordinates": { "lat": 42.997231, "lng": -89.565536 }, "link": { "intel": "https://intel.ingress.com/intel?ll=42.997231,-89.565536&z=16&pll=42.997231,-89.565536", "gmap": "https://google.com/maps/place/42.997231,-89.565536" }, "image": "http://lh5.ggpht.com/uW2FkbRNmqBQsW1HllVrmrDg9TorG430nSx3pOuWB6bypNx_gYwtfSeaDiZGGF0nz9rJQndOOd8W2vUIun_X" },
    { "guid": "36f67d9b9e5c42de87c943b5ff699f35.16", "title": "Epic’s Deep Space Auditorium", "coordinates": { "lat": 42.998184, "lng": -89.568466 }, "link": { "intel": "https://intel.ingress.com/intel?ll=42.998184,-89.568466&z=16&pll=42.998184,-89.568466", "gmap": "https://google.com/maps/place/42.998184,-89.568466" }, "image": "http://lh3.googleusercontent.com/pur_OP0IZili_K594HsrTp1BAWlMEtDrLwXqpY_crYvkqkd-WfNWWwI__Glacz2PXGfRklTFevGvoTktiMkF7ScgWfw" },
    { "guid": "ca237f5147624358ba5c9c70c78d6e4b.16", "title": "Epic-Isis Dragon's Lair Drawbridge", "coordinates": { "lat": 42.996472, "lng": -89.565201 }, "link": { "intel": "https://intel.ingress.com/intel?ll=42.996472,-89.565201&z=16&pll=42.996472,-89.565201", "gmap": "https://google.com/maps/place/42.996472,-89.565201" }, "image": "http://lh5.ggpht.com/IbSlveE5z3XeHjznh9HXmFe4yr1mTxhVxja0BfXrl9A6oEerF6vyqutukPUTf3D8g49_xtfU3lVf20ufTjLX" },
    { "guid": "7acd7504cd0d43f38d72a3356d5e28ff.16", "title": "Epic - Banana ", "coordinates": { "lat": 42.996497, "lng": -89.56867 }, "link": { "intel": "https://intel.ingress.com/intel?ll=42.996497,-89.56867&z=16&pll=42.996497,-89.56867", "gmap": "https://google.com/maps/place/42.996497,-89.56867" }, "image": "http://lh5.ggpht.com/WGnc-1r7cGpXRONJigB2oXHIlpREiSPfyvfGIM1ucx1XXkTbnsqeMUCHAPHpr6Sc0FKYoBaHJsWFH4QYFvJUYg" },
    { "guid": "5c3cbffcff94433f951c5fac1e6418d3.16", "title": "Epic - Creepy Girl Statue", "coordinates": { "lat": 42.995072, "lng": -89.568596 }, "link": { "intel": "https://intel.ingress.com/intel?ll=42.995072,-89.568596&z=16&pll=42.995072,-89.568596", "gmap": "https://google.com/maps/place/42.995072,-89.568596" }, "image": "http://lh6.ggpht.com/uggzfMCMF3mKIV-veKjsziYs-20xSGAkT8JP9nZPlyDeH1G-J-NK-AkMStuMwlTFvtJug-8BlCoi-X6Cr8v5" },
    { "guid": "e8eb0e0886384daab46299984f473c5e.11", "title": "Epic - Yoda Parking Ramp K", "coordinates": { "lat": 42.997634, "lng": -89.566588 }, "link": { "intel": "https://intel.ingress.com/intel?ll=42.997634,-89.566588&z=16&pll=42.997634,-89.566588", "gmap": "https://google.com/maps/place/42.997634,-89.566588" }, "image": "http://lh6.ggpht.com/yGBZVTxX9Wlq2Udo5YOTfXjzrExu_lp7y4r1vrH9JmqbWIgcE265wXlCT59PxU05Qd0AvOFtT2aHNvEA36K8FHbhZN_8GpyQ-jOsXYtZpQvXFjs" },
    { "guid": "af75088e39ec4dcfa2262538857e700b.16", "title": "Epic - Tin Robot", "coordinates": { "lat": 42.995005, "lng": -89.565594 }, "link": { "intel": "https://intel.ingress.com/intel?ll=42.995005,-89.565594&z=16&pll=42.995005,-89.565594", "gmap": "https://google.com/maps/place/42.995005,-89.565594" }, "image": "http://lh3.googleusercontent.com/tCAH0WOI2_XQI9DsK9sUPt-JcAGixY87yGtYA6zRCYM1Z7iQXXUwsWmzT9EZZGJ_srEnNRi-3Lp4gy2qUEXw" },
    { "guid": "7ab440dbd2d24e8683de83019fe7e092.16", "title": "Epic - Weather Vane", "coordinates": { "lat": 42.996519, "lng": -89.565897 }, "link": { "intel": "https://intel.ingress.com/intel?ll=42.996519,-89.565897&z=16&pll=42.996519,-89.565897", "gmap": "https://google.com/maps/place/42.996519,-89.565897" }, "image": "http://lh6.ggpht.com/4tRE_Y0q6mcplSrt4gSuCMKh9rOozIxz19mPQNvKNI8y24He6-uIb-rhCrTRiSCVk8U7pVrMZE-NMMnCKSc" },
    { "guid": "e1f3ec5cd4fa48d1bbf3df4531cd2735.16", "title": "Epic Rooster", "coordinates": { "lat": 42.996317, "lng": -89.570146 }, "link": { "intel": "https://intel.ingress.com/intel?ll=42.996317,-89.570146&z=16&pll=42.996317,-89.570146", "gmap": "https://google.com/maps/place/42.996317,-89.570146" }, "image": "http://lh3.googleusercontent.com/A6FcN9v8Bd5rTAtHFLF-d-NRMVT5ssVoVhTH5GAxRKXkbYX5nN7gAYFF9dWpnRkrKoIlFeFmDjKJShpdA-wb" },
    { "guid": "1041ec7dd2fd42c9920c7dd0fc727aea.16", "title": "Epic Red Twist ", "coordinates": { "lat": 42.996638, "lng": -89.569699 }, "link": { "intel": "https://intel.ingress.com/intel?ll=42.996638,-89.569699&z=16&pll=42.996638,-89.569699", "gmap": "https://google.com/maps/place/42.996638,-89.569699" }, "image": "http://lh5.ggpht.com/6sKllL0Buoa8RtfBapprw26IRJ124cPMX0WtgOsgb_BhTvLWD5DJm02gwo3iH30wiCXQqL5ExsiE87R-_MIJ" },
    { "guid": "d20c20d6af4a41c6aa7e2ed3a7f16ace.16", "title": "Beagle - 2", "coordinates": { "lat": 42.996085, "lng": -89.568716 }, "link": { "intel": "https://intel.ingress.com/intel?ll=42.996085,-89.568716&z=16&pll=42.996085,-89.568716", "gmap": "https://google.com/maps/place/42.996085,-89.568716" }, "image": "http://lh4.ggpht.com/4w-ytehLkPH9188z30sRnllna4Q0b9QZC5l9zyPLZYxYAHDssAthP9ne6uDkjLjAnxtBuTbV36fXrdokr8h92A" },
    { "guid": "4d3dfdf128ee4a44b295916e7ba73d24.16", "title": "Epic - Treebeard ", "coordinates": { "lat": 42.999466, "lng": -89.568473 }, "link": { "intel": "https://intel.ingress.com/intel?ll=42.999466,-89.568473&z=16&pll=42.999466,-89.568473", "gmap": "https://google.com/maps/place/42.999466,-89.568473" }, "image": "http://lh4.ggpht.com/8xfGyPa_01EdgXbN2IGHfqO-bHcRJ2cKF_WVJRsM_Bzi770PFxmiVIRueJZtQzLOD58icuKywl2JV2jBtmT44w" },
    { "guid": "036fd2d875a044f49f83775ff6610fb7.16", "title": "Epic Brass Deer", "coordinates": { "lat": 42.995326, "lng": -89.569441 }, "link": { "intel": "https://intel.ingress.com/intel?ll=42.995326,-89.569441&z=16&pll=42.995326,-89.569441", "gmap": "https://google.com/maps/place/42.995326,-89.569441" }, "image": "http://lh3.ggpht.com/e6Vesf5sPxxdtmYJ1Q4DwmnOEH2xadnNWfjxJcDRsrKYizVUwCLS35CaHddjc7tTbmYbU4LLL56MlbkN78vl" },
    { "guid": "97e182ec80914b908f37e5092af3c631.16", "title": "Epic- Curious Horse", "coordinates": { "lat": 42.997504, "lng": -89.565362 }, "link": { "intel": "https://intel.ingress.com/intel?ll=42.997504,-89.565362&z=16&pll=42.997504,-89.565362", "gmap": "https://google.com/maps/place/42.997504,-89.565362" }, "image": "http://lh3.ggpht.com/5L7PPfXknGsTfcRlSL7c__26Xn0sNwK5L--z2q0qVwyFvLicpOVWZ-TinPL98xpW66SduNJUj4D8mPh6HDs" },
    { "guid": "e662be8594c14d9994a2b2fcb7975c05.16", "title": "Epic - Clay Flowers ", "coordinates": { "lat": 42.995943, "lng": -89.569103 }, "link": { "intel": "https://intel.ingress.com/intel?ll=42.995943,-89.569103&z=16&pll=42.995943,-89.569103", "gmap": "https://google.com/maps/place/42.995943,-89.569103" }, "image": "http://lh3.ggpht.com/WTPccNR-HaFkGdnbhNhEHNHk-fw_M8fofodZ0uckmBzJ5WsAEIswgDWJVrt0D9T2v4cmdolF8LJEIc0QuoDA" },
    { "guid": "adabbd475c9a4d2b939cb6e70b9cfe0a.16", "title": "Campfire - Epic", "coordinates": { "lat": 42.997864, "lng": -89.564901 }, "link": { "intel": "https://intel.ingress.com/intel?ll=42.997864,-89.564901&z=16&pll=42.997864,-89.564901", "gmap": "https://google.com/maps/place/42.997864,-89.564901" }, "image": "http://lh6.ggpht.com/FG-H9EKGeHrPg7jwniTaBh4c6mbekDpW4FyqSK4uCU33_evA8CbnnFZRV7MS8D5EiVmtQiBD_-H93QrRqwsUdg" },
    { "guid": "f253d070e8384f759987bde3cb14b051.16", "title": "Epic - Rattlesnake", "coordinates": { "lat": 42.997852, "lng": -89.565508 }, "link": { "intel": "https://intel.ingress.com/intel?ll=42.997852,-89.565508&z=16&pll=42.997852,-89.565508", "gmap": "https://google.com/maps/place/42.997852,-89.565508" }, "image": "http://lh6.ggpht.com/4EvVAOhOTTINrbN_YkP_o6KxV3kCaaDoPWAjMo8xEL5O_G73qe0wdj1JqsPHrxnPw0r-6G5aSvYx4CVV-u0" },
    { "guid": "0d601815e55e4c53956f2f6ce13b00f8.16", "title": "Epic - Flamingo Cow", "coordinates": { "lat": 42.995986, "lng": -89.57054 }, "link": { "intel": "https://intel.ingress.com/intel?ll=42.995986,-89.57054&z=16&pll=42.995986,-89.57054", "gmap": "https://google.com/maps/place/42.995986,-89.57054" }, "image": "http://lh3.googleusercontent.com/Bz9hqSbidTOU8-vRsKrmJRsthDTLsGxFVv725sjqUz3B9trBNXFXFyY4ioEV8H3WPzVMTiwFbPKrp4dSVBuz" },
    { "guid": "03e16846a3c44e2db2b8be89bdb369a5.16", "title": "Epic Elephants", "coordinates": { "lat": 42.997496, "lng": -89.566108 }, "link": { "intel": "https://intel.ingress.com/intel?ll=42.997496,-89.566108&z=16&pll=42.997496,-89.566108", "gmap": "https://google.com/maps/place/42.997496,-89.566108" }, "image": "http://lh5.ggpht.com/IBiNef7KFcH_r-2POZwK6ilkFZ2CI73kpDaeXLUhnNcrXBRykZd2qSOEO-_CVTy5llh0WoLqYbAD1_7bZ-8_" },
    { "guid": "ec06943252514bccb95b5ce96123351b.16", "title": "Epic - Mir ", "coordinates": { "lat": 42.995998, "lng": -89.570154 }, "link": { "intel": "https://intel.ingress.com/intel?ll=42.995998,-89.570154&z=16&pll=42.995998,-89.570154", "gmap": "https://google.com/maps/place/42.995998,-89.570154" }, "image": "http://lh3.ggpht.com/L6UJz8Lbn9L_RzLXQZgfXmXG3WhFt7fMfR6fEAGkAAWepj_zEggNbgCGt2gWUedmfR-PBpU7ND5Z6fvqymq4" },
    { "guid": "e61994a5c8204b88a29ae7f2b180e8fd.16", "title": "Epic Twin Dinos", "coordinates": { "lat": 43.002593, "lng": -89.567764 }, "link": { "intel": "https://intel.ingress.com/intel?ll=43.002593,-89.567764&z=16&pll=43.002593,-89.567764", "gmap": "https://google.com/maps/place/43.002593,-89.567764" }, "image": "http://lh3.googleusercontent.com/DaWZkJ9pl0yyvABmeADLdN7CGjLOV3zp0wWeNiW0ESnK7aRYepcOebY2ZZcNOSKY9spkmn_URqR9KDOU2v0" },
    { "guid": "81aa57b6a5124c2b866078a00095f596.16", "title": "Epic Donkey", "coordinates": { "lat": 42.996888, "lng": -89.564673 }, "link": { "intel": "https://intel.ingress.com/intel?ll=42.996888,-89.564673&z=16&pll=42.996888,-89.564673", "gmap": "https://google.com/maps/place/42.996888,-89.564673" }, "image": "http://lh3.googleusercontent.com/_sYkAOGHu0fFfD32keJ_hVirALqpcDG7Ao8OepW-kPVcUwpjVMb3F-SrPsIunKKHM_VkzOZcBw5Uzxpio0o" },
    { "guid": "9c05e5013cde4c1e82484bffdce3cb9d.16", "title": "Epic - Metal Dogs", "coordinates": { "lat": 42.996995, "lng": -89.569102 }, "link": { "intel": "https://intel.ingress.com/intel?ll=42.996995,-89.569102&z=16&pll=42.996995,-89.569102", "gmap": "https://google.com/maps/place/42.996995,-89.569102" }, "image": "http://lh4.ggpht.com/bk1_SWKlsXEJ63q6IkWtKKRLjzrqoRLE16hJ8QloDgsmg5zcjqha1clQ0kOZezeqRSjYaH1gX5QegbMNz0jl" },
    { "guid": "3dadb7a98d3c47b8ac5ae53ada4777b1.16", "title": "Epic - Disc ", "coordinates": { "lat": 42.996964, "lng": -89.565919 }, "link": { "intel": "https://intel.ingress.com/intel?ll=42.996964,-89.565919&z=16&pll=42.996964,-89.565919", "gmap": "https://google.com/maps/place/42.996964,-89.565919" }, "image": "http://lh5.ggpht.com/RHjH9aoe61US7VAYaaiyVgq1H6wsTm6GESv42UXCBXAuSc4Kg_neDmtLEbgCV4kdu1V2dmkkQUiOm69d5cg" },
    { "guid": "abb3f04c7c07499a969e8206140cdf69.16", "title": "Epic - Deep Space Gollum", "coordinates": { "lat": 42.998597, "lng": -89.566266 }, "link": { "intel": "https://intel.ingress.com/intel?ll=42.998597,-89.566266&z=16&pll=42.998597,-89.566266", "gmap": "https://google.com/maps/place/42.998597,-89.566266" }, "image": "http://lh5.ggpht.com/Uv5oNL8_qDy6QWoz-HX65rpDCxqJMgDZ7fBTDBD4xPZh_l_h_oxsIObYnCR-ze0HrZzaL2GDoDH_cz77Qbva" },
    { "guid": "5d51f4e565ec46c68d9dc3fcef0731f3.16", "title": "Epic - Dragon and Bird", "coordinates": { "lat": 42.996379, "lng": -89.564967 }, "link": { "intel": "https://intel.ingress.com/intel?ll=42.996379,-89.564967&z=16&pll=42.996379,-89.564967", "gmap": "https://google.com/maps/place/42.996379,-89.564967" }, "image": "http://lh3.ggpht.com/_In3ATbKfk5Vfn8KTgPdBGIyvlncK8U2bLdfi7ntHDxqSMelxwXmKFV0j_2ZvX4uNNCX6YIWA04mUQ0xNNN_" },
    { "guid": "bd6b389a453b4de483204acd6e1cec51.16", "title": "Epic - Vase", "coordinates": { "lat": 42.995512, "lng": -89.56886 }, "link": { "intel": "https://intel.ingress.com/intel?ll=42.995512,-89.56886&z=16&pll=42.995512,-89.56886", "gmap": "https://google.com/maps/place/42.995512,-89.56886" }, "image": "http://lh4.ggpht.com/ie5eFtVWAbMzowkNvZy9inE-tdW4KR--7nW017n71vJ1W034V4pOR35wsIeM6waCHyQSgq6lhzVyQVpDs16H" },
    { "guid": "27a1816553b74209a159d6c7dcbee4d7.16", "title": "Epic - Fountain ", "coordinates": { "lat": 42.995765, "lng": -89.568164 }, "link": { "intel": "https://intel.ingress.com/intel?ll=42.995765,-89.568164&z=16&pll=42.995765,-89.568164", "gmap": "https://google.com/maps/place/42.995765,-89.568164" }, "image": "http://lh6.ggpht.com/uRGbt8hw-w4zgMEi3B7GmvjxoebwlkRPD5HQ_w5xhXJqXPGOpTJO3yKk61-MpXQzSh02B2nBEh7vyhT1V7CA" },
    { "guid": "c3b98d41a6fa4592a0737a88454e054a.16", "title": "Epic - Rock Garden ", "coordinates": { "lat": 42.998635, "lng": -89.5657 }, "link": { "intel": "https://intel.ingress.com/intel?ll=42.998635,-89.5657&z=16&pll=42.998635,-89.5657", "gmap": "https://google.com/maps/place/42.998635,-89.5657" }, "image": "http://lh5.ggpht.com/LhOG9YrLvRwja_-fwxhEUHw8Jglt95xaihOQJ6ZSn2Gh6lXMdfzGgaT--Vk-g66ryL4qhABRYFpvQnoaJC27" },
    { "guid": "94fc702f64f14060b90bd6f0123a88cb.16", "title": "Epic - Andromeda West", "coordinates": { "lat": 42.994912, "lng": -89.567225 }, "link": { "intel": "https://intel.ingress.com/intel?ll=42.994912,-89.567225&z=16&pll=42.994912,-89.567225", "gmap": "https://google.com/maps/place/42.994912,-89.567225" }, "image": "http://lh3.ggpht.com/vRX1daC5jz3d0c3TxNY1wIQhZMtGINHBL95px-y9b18lVwjGMfg9-kW2_MIDIkg4EkJyNHN1RSx7oH9XKMHy" },
    { "guid": "e8d550b75540426da8e6d5c9e467fc0e.16", "title": "Ella’s Deli Carousel - Epic", "coordinates": { "lat": 42.997133, "lng": -89.568037 }, "link": { "intel": "https://intel.ingress.com/intel?ll=42.997133,-89.568037&z=16&pll=42.997133,-89.568037", "gmap": "https://google.com/maps/place/42.997133,-89.568037" }, "image": "http://lh3.googleusercontent.com/O7OySXqW8PINsvN68beASKkKPnt1kfSIbKE7Tc8K-Ipy-dt1-tJgCdgv12RYvs4ImatiCgAXJI8IdT7N933e9nuE6SM" },
    { "guid": "a068eb4cfb604575a2edea6ea0d1b552.16", "title": "Epic Bear", "coordinates": { "lat": 42.996103, "lng": -89.568366 }, "link": { "intel": "https://intel.ingress.com/intel?ll=42.996103,-89.568366&z=16&pll=42.996103,-89.568366", "gmap": "https://google.com/maps/place/42.996103,-89.568366" }, "image": "http://lh4.ggpht.com/NETo4TVFKtNKFCuEtlE48JZcmGSUG3R5pXuPeZ2XL7TQLRknwhcyG6IXGO_oK6kmPYKrT4gRmjtF7qNJKXs" },
    { "guid": "c959a0b88763419a869af0e36ca473db.16", "title": "Epic - Pets ", "coordinates": { "lat": 42.996026, "lng": -89.567628 }, "link": { "intel": "https://intel.ingress.com/intel?ll=42.996026,-89.567628&z=16&pll=42.996026,-89.567628", "gmap": "https://google.com/maps/place/42.996026,-89.567628" }, "image": "http://lh4.ggpht.com/6XlKfk7SP1vwrtis2VdUO94XKblxWRzkNXIkddnWc9puNmCz6yZAu0cAJkGYaVapV_cpYV8r8KpfF2DAmTY" },
    { "guid": "79f70d3e3e7e4be48abdc6a39c73f3ee.16", "title": "Epic Isis Dragon's Lair", "coordinates": { "lat": 42.996781, "lng": -89.565131 }, "link": { "intel": "https://intel.ingress.com/intel?ll=42.996781,-89.565131&z=16&pll=42.996781,-89.565131", "gmap": "https://google.com/maps/place/42.996781,-89.565131" }, "image": "http://lh3.googleusercontent.com/ib0k0M9I0T6aM2Xi2KcAgH9fHNF9DOv73Gz19i3Q4BV45ECsBwbD0Sa6xzr4iY90SfxQ5CNX5dE3q1cKnqfm" },
    { "guid": "2e6af22b4efb4dcdbee6d686e9cb38d2.16", "title": "Epic - Rail Car", "coordinates": { "lat": 42.998863, "lng": -89.564698 }, "link": { "intel": "https://intel.ingress.com/intel?ll=42.998863,-89.564698&z=16&pll=42.998863,-89.564698", "gmap": "https://google.com/maps/place/42.998863,-89.564698" }, "image": "http://lh3.googleusercontent.com/kcVTJKfyQCVeOkdnQDGNn5OB-vkiLhxIbgeGQFnLwQtF-v399vpwTgfUWywop-v5WuF1ZnkIAP2WMtE3Jto" },
    { "guid": "d678afe6ff7f4306b0a0116a1745376b.16", "title": "Epic - Voyager Hall - Pioneer ", "coordinates": { "lat": 42.995886, "lng": -89.569651 }, "link": { "intel": "https://intel.ingress.com/intel?ll=42.995886,-89.569651&z=16&pll=42.995886,-89.569651", "gmap": "https://google.com/maps/place/42.995886,-89.569651" }, "image": "http://lh3.ggpht.com/rvEDWRehb2int-FZmS4t_niSxO9FF6cSTxsfgaMSZrnzy3IsGJfDvtZDC9z_oS3RpJ2Sv1mAjAM3l1Os4IjR" },
    { "guid": "5797b25bedca468988e87f22f46566de.16", "title": "Fortress Dragon of Epic", "coordinates": { "lat": 43.001108, "lng": -89.567001 }, "link": { "intel": "https://intel.ingress.com/intel?ll=43.001108,-89.567001&z=16&pll=43.001108,-89.567001", "gmap": "https://google.com/maps/place/43.001108,-89.567001" }, "image": "http://lh3.googleusercontent.com/FWMMfSrNLZneUv6Vjc2D3H9jvZ2ye--2fJRn2dmBrmRYCPYa039tAE1uyMtFbC6XSp5JZHgwkIappGGouQ42cBO2Vw" },
    { "guid": "4ce591e0967843ceba791db897307cba.16", "title": "Epic - Voyager Hall - Eagle ", "coordinates": { "lat": 42.99514, "lng": -89.56933 }, "link": { "intel": "https://intel.ingress.com/intel?ll=42.99514,-89.56933&z=16&pll=42.99514,-89.56933", "gmap": "https://google.com/maps/place/42.99514,-89.56933" }, "image": "http://lh4.ggpht.com/O5hEND9YZUGnXn8U-WTWNDmNDThHQAmAr0_pqpLbgZgcyIsXWMM9rbiLVINr_cP_JXEo7O20OZ3T7L2EQcxrKA" },
    { "guid": "0716efe44fad4c85b3dcb2d566cf4b82.16", "title": "Epic - Horseshoe Cow ", "coordinates": { "lat": 42.996598, "lng": -89.568974 }, "link": { "intel": "https://intel.ingress.com/intel?ll=42.996598,-89.568974&z=16&pll=42.996598,-89.568974", "gmap": "https://google.com/maps/place/42.996598,-89.568974" }, "image": "http://lh6.ggpht.com/imGM-jf3d7YHY5eXWUb81GPoAmRs6ckdQJ9HZODJAnOWJ6QdW0r7DPkIcmO-WtVLvq1e_eRibQwVbKyQqseZ" },
    { "guid": "4d4c743133a340dea4e75637947bd2e7.16", "title": "Epic - Hydra", "coordinates": { "lat": 42.996648, "lng": -89.565186 }, "link": { "intel": "https://intel.ingress.com/intel?ll=42.996648,-89.565186&z=16&pll=42.996648,-89.565186", "gmap": "https://google.com/maps/place/42.996648,-89.565186" }, "image": "http://lh5.ggpht.com/Xd41sXEcMymtjpB2H5adRG6op3OvQ-ysTtqT5s1v3AQ-mgxl3-lgVQIlghTNIUKv5Qn_e9G2xVjdi6u5ol0" },
    { "guid": "bac8dce412314ac18ab37b36adbc8266.16", "title": "Epic Teardrop Sculptures", "coordinates": { "lat": 42.995362, "lng": -89.566144 }, "link": { "intel": "https://intel.ingress.com/intel?ll=42.995362,-89.566144&z=16&pll=42.995362,-89.566144", "gmap": "https://google.com/maps/place/42.995362,-89.566144" }, "image": "http://lh6.ggpht.com/Gt012e0i6J_em4HYT5onBgq96Emno4Wfp0MI-Ka5YjkFeXFZdQxgOuiVld7KQYV05_vyyUVz_vr4Ur-TxMWp" },
    { "guid": "bf67014e8086407eac612778f7a54672.16", "title": "Epic - Voyager Hall - Ranger", "coordinates": { "lat": 42.995532, "lng": -89.569758 }, "link": { "intel": "https://intel.ingress.com/intel?ll=42.995532,-89.569758&z=16&pll=42.995532,-89.569758", "gmap": "https://google.com/maps/place/42.995532,-89.569758" }, "image": "http://lh3.ggpht.com/wCrzJO6jJK3Am5LMdegc2BAh5423Pn_eP9MNHG4o1DCEYjbKZXS65ZdHPu2Y19xjdPXG4ie3NKN5V97f92uU" },
    { "guid": "a9722703fc504730a5d3998aed6a9908.16", "title": "Epic - Voyager Hall - Scrap Metal Dinosaur ", "coordinates": { "lat": 42.996072, "lng": -89.569621 }, "link": { "intel": "https://intel.ingress.com/intel?ll=42.996072,-89.569621&z=16&pll=42.996072,-89.569621", "gmap": "https://google.com/maps/place/42.996072,-89.569621" }, "image": "http://lh5.ggpht.com/ov8ekWoFRAYZUTbRD-7sJ4Hy5jMTgXHwIWOtcQ8pA-kcJRuy0KofDPBcX_PHnOytTjtfBLo045rTn5YZsyrk" },
    { "guid": "8ed25c5c575343c197de8b044ce879f8.16", "title": "Epic - Delphi Outdoor Amphitheater", "coordinates": { "lat": 42.995856, "lng": -89.566257 }, "link": { "intel": "https://intel.ingress.com/intel?ll=42.995856,-89.566257&z=16&pll=42.995856,-89.566257", "gmap": "https://google.com/maps/place/42.995856,-89.566257" }, "image": "http://lh3.ggpht.com/OsB5bolK-r0UDHWfHDlsPkENrFDpTzu3GSAjxdZ7Sp1NX5TKu3FFUwpZCBTUyjOsPvDo0c-G36RSq1VNSz0" },
    { "guid": "218632d5da00407e86a96f936b466d94.16", "title": "Epic - Heaven", "coordinates": { "lat": 42.995881, "lng": -89.565785 }, "link": { "intel": "https://intel.ingress.com/intel?ll=42.995881,-89.565785&z=16&pll=42.995881,-89.565785", "gmap": "https://google.com/maps/place/42.995881,-89.565785" }, "image": "http://lh4.ggpht.com/s_EGAJSQFzKhc1tCQ_Ye_s8AuByUK_zvWkSjtSb9Z-eFXmvrSp1B-cYQbBhIlPgr5b_z-f-3yNJkUV7Khu6CQA" },
    { "guid": "5af9d7f7efc64f8d91d90a54b9661e9a.16", "title": "Epic - Horseshoe Horse", "coordinates": { "lat": 42.997146, "lng": -89.565262 }, "link": { "intel": "https://intel.ingress.com/intel?ll=42.997146,-89.565262&z=16&pll=42.997146,-89.565262", "gmap": "https://google.com/maps/place/42.997146,-89.565262" }, "image": "http://lh6.ggpht.com/k9mQxU6F4RP65dVdVgjQoNZMUhJXl9NPBAeS6G4IBQxaGIPHP7rC1r8xqsgSlSA0h6T9Y_xclvJASrGCpDVm3g" },
    { "guid": "2fb98ebd09134521a5eaddeeefb65519.16", "title": "Epic - Epicenter Entrance South", "coordinates": { "lat": 42.996479, "lng": -89.567432 }, "link": { "intel": "https://intel.ingress.com/intel?ll=42.996479,-89.567432&z=16&pll=42.996479,-89.567432", "gmap": "https://google.com/maps/place/42.996479,-89.567432" }, "image": "http://lh3.ggpht.com/W65NKIK1QAFdSboas00zEu33k9Tx0jFqvXbmkxfUfoZl-vcpajqBDO5cP6HwH3jxN0gffPyFxK_atjKerTVfKg" },
    { "guid": "1bdf286547b54c10bb21cd0cb1cf68d7.16", "title": "Juno - Epic", "coordinates": { "lat": 42.997669, "lng": -89.565292 }, "link": { "intel": "https://intel.ingress.com/intel?ll=42.997669,-89.565292&z=16&pll=42.997669,-89.565292", "gmap": "https://google.com/maps/place/42.997669,-89.565292" }, "image": "http://lh5.ggpht.com/1V8xSZczdvJBm6fvgrKtAeRx_yeoFvzuCx9M5U35P1huhw0Ala5qVH9PXNjfHC__9gYvhuMlC4n72Zh35INY" },
    { "guid": "d6c51cf2c7664c668407d4a111edb2f4.16", "title": "Epic - Voyager Hall - Mariner", "coordinates": { "lat": 42.995962, "lng": -89.569409 }, "link": { "intel": "https://intel.ingress.com/intel?ll=42.995962,-89.569409&z=16&pll=42.995962,-89.569409", "gmap": "https://google.com/maps/place/42.995962,-89.569409" }, "image": "http://lh4.ggpht.com/5UUSfXveEyEbd4sN-78829Gx6k8BdWo7vJqZE1CGuce5f3Id7g0-K4yJl4l4wDnUOetEjvDPsEZF1AONedtIAQ" },
    { "guid": "5a0ffd900268453dab3a38747deb0eb3.16", "title": "Yellow Brick Road Beginning", "coordinates": { "lat": 42.998369, "lng": -89.562467 }, "link": { "intel": "https://intel.ingress.com/intel?ll=42.998369,-89.562467&z=16&pll=42.998369,-89.562467", "gmap": "https://google.com/maps/place/42.998369,-89.562467" }, "image": "http://lh3.googleusercontent.com/uVXp825N8DSoVXhVfSr0dvLxLbEbLRySQ-U6PcooiBMhhT08RNY048SUZthDa2p2Wv_zUM73TC05oNYqCTdKJA" },
    { "guid": "63f0a7111e8149bfb51910874d64f3e7.16", "title": "Epic’s Wisconsin Showcase Mural", "coordinates": { "lat": 42.997917, "lng": -89.568595 }, "link": { "intel": "https://intel.ingress.com/intel?ll=42.997917,-89.568595&z=16&pll=42.997917,-89.568595", "gmap": "https://google.com/maps/place/42.997917,-89.568595" }, "image": "http://lh3.googleusercontent.com/nRChLUYElwGWLsRf7DDWTMulLdStDxrHxYbX1Zp_El1vMzXa5l2TBGcT-j0cupDfeqea8rTzZ7Un9HmVtAMJHM89hpH4" },
    { "guid": "b2bbc394c3c64476b051b2a30616acb2.16", "title": "Epic - Dobby", "coordinates": { "lat": 42.99984, "lng": -89.565122 }, "link": { "intel": "https://intel.ingress.com/intel?ll=42.99984,-89.565122&z=16&pll=42.99984,-89.565122", "gmap": "https://google.com/maps/place/42.99984,-89.565122" }, "image": "http://lh3.googleusercontent.com/ZosZL6lefwQSr0h7izMrQSsgH6DJZtSFZd8_wSR-vRCFj9x-g1ZZ3tIe9m0zv6GzCXmcZUjUOewNaqykI5k" }
];
exports["default"] = data;
//# sourceMappingURL=data.js.map