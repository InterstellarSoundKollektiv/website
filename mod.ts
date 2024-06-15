// Create a mod.ts file
import { Label, Body, WebGen, Button, Grid, Spacer, Box, Content, isMobile, Image, Checkbox, asRef, Color } from "https://deno.land/x/webgen/mod.ts";

import "./style.css";
import { _common } from "https://deno.land/std@0.212.0/path/_common/common.ts";

const config = asRef({
    selectedSize: "small",
    fotobox: false,
    fotograf: false,
});

WebGen();
Body(
    Grid(
        isMobile.map(mobile => mobile ?
            Box() :
            Grid(
                Button("Interstellar Sound Kollektiv").setJustifyContent("center"),
                Spacer(),
                Button("News").setJustifyContent("center"),
                Button("Buchen").setJustifyContent("center"),
                Button("Events").setJustifyContent("center"),
                Spacer(),
                Grid(
                    Button("Login").setJustifyContent("center"),
                ).setWidth("194px").setJustifyItems("end")
            ).setDirection("column")
                .setRawColumns("max-content auto max-content max-content max-content auto max-content")
                .addClass("bg-white")
                .setPadding("10px var(--gap)")
                .setGap("15px")).asRefComponent(),
        Grid(
            Content(
                isMobile.map(mobile =>
                    Grid(
                        Grid(
                            Label("Interstellar Sound Kollektiv").setJustifyContent("center").setTextSize("7xl"),
                            Button("Jetzt buchen").setJustifyContent("center").setTextSize("3xl").setHeight("60px")
                        ).setGap("20px").setJustifyItems("start"),
                        Label("Das beste Sound System das es gibt. Bla bla bla blaLorem ipsum dolor  sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum").setTextSize("2xl").setJustifyContent("center").setPadding("0 var(--gap)"),
                    ).setDirection(mobile ? "row" : "column").setRawColumns(mobile ? "1fr" : "1fr 1fr").setGap("50px").setAlignItems("center").setHeight("100%")
                ).asRefComponent().addClass("fixcontent"),
            ).setMaxWidth("1200px"),
        ).addClass("opener").setHeight("80vh"),
        Grid(
            Content(
                Label("News").setTextAlign("center").setWidth("100%").setTextSize("4xl").setPadding("40px 0"),
                Grid(
                    Image("poster.png", "poster").setWidth("300px"),
                    Grid(
                        Label("Nächste Rave Night").addClass("color-black").setTextSize("5xl"),
                        Label("Es wird wieder geraved! Nächsten Donnerstag findet wieder eine Rave Night statt. Die Location ist wie immer geheim und wird kurz vorher auf unseren üblichen Kanälen geteilt.Sets gibts von @tru23s und @Ynotekk und es gibt wieder Reichlich Getränke und Hot Dogs. Wir freuen uns auf euch!").addClass("color-black").setTextSize("3xl"),
                    ).setPadding("0 20px").setGap("20px"),
                ).setDirection("column").setGap("20px").addClass("bg-white").setPadding("20px").setJustifyItems("center").setAlignItems("start"),
            ).setMaxWidth("1200px"),
        ).setPadding("0 0 90px 0"),
        Grid(
            Content(
                Label("Buche das System").setWidth("100%").setTextAlign("center").setTextSize("4xl").setPadding("40px 0").addClass("color-black"),
                Grid(
                    Grid(
                        config.map(conf => Image(conf.selectedSize + "speaker.svg", "speaker")).asRefComponent(),
                        Grid(
                            Grid(
                                Image("djmichi.png", "michi").setWidth("100px").setHeight("100px").setBorderRadius("complete"),
                                Grid(
                                    Label("DJ Michi").addClass("color-black").setTextSize("2xl").setPadding("0 0 20px 0"),
                                    Label("erfahrener DJ und hat schon auf vielen Events aufgelegt.").addClass("color-black").setTextSize("xl"),
                                )
                            ).setDirection("column").setGap("20px"),
                            Grid(
                                config.map(conf => conf.fotobox ? Label("Fotobox").addClass("color-black").setTextSize("2xl") : Box()).asRefComponent(),
                                config.map(conf => conf.fotograf ? Label("Fotograf").addClass("color-black").setTextSize("2xl") : Box()).asRefComponent(),
                            ).setDirection("column").setGap("20px"),
                        ).setDirection("column")
                    ),
                    Grid(
                        Grid(
                            Label("Größe:").addClass("bold"),
                            Label("Wie groß das System sein soll"),
                        ).setDirection("column").setGap("10px").addClass("color-black").setRawColumns("max-content 1fr"),
                        Grid(
                            Button("Klein"),
                            Button("Coming Soon").setColor(Color.Disabled),
                            Button("Coming Soon").setColor(Color.Disabled),
                        ).setDirection("column").addClass("color-black"),
                        Grid(
                            Label("DJ:").addClass("bold"),
                            Label("Welcher DJ soll auflegen?"),
                        ).setDirection("column").setGap("10px").addClass("color-black").setRawColumns("max-content 1fr"),
                        Grid(
                            Button("DJ A"),
                            Button("DJ B"),
                            Button("DJ C"),
                        ).setDirection("column").addClass("color-black"),
                        Grid(
                            Label("Fotos:").addClass("bold"),
                            Label("Welche Fotos sollen gemacht werden?"),
                        ).setDirection("column").setGap("10px").addClass("color-black").setRawColumns("max-content 1fr"),
                        Grid(
                            Grid(Checkbox().onClick((_, v) => {
                                config.setValue({ ...config.getValue(), fotobox: !v });
                                console.log(config.getValue());
                            }), Label("Fotobox")).setDirection("column").setGap("10px"),
                            Grid(Checkbox().onClick((_, v) => {
                                config.setValue({ ...config.getValue(), fotograf: !v });
                                console.log(config.getValue());
                            }), Label("Fotograf")).setDirection("column").setGap("10px"),
                        ).addClass("color-black"),
                        Grid(
                            Label("Preis:").addClass("bold"),
                            Label("Wie viel diese Konfiguration kostet"),
                        ).setDirection("column").setGap("10px").addClass("color-black").setRawColumns("max-content 1fr"),
                        Label("1000€/Tag").addClass("color-black").addClass("bold").setTextSize("4xl"),
                    )
                ).setDirection("column").setGap("20px").setRawColumns("1fr 1fr"),
            ).setMaxWidth("1200px"),
        ).addClass("bg-white").setPadding("0 0 90px 0"),
        Grid(
            Label("Events").setTextAlign("center").setWidth("100%").setTextSize("4xl").setPadding("40px 0"),
            Grid(
                Grid(
                    Image("event1.webp", "event1"),
                    Content(
                        Label("Rave am Donnerstag").addClass("color-black").addClass("bold").setTextSize("2xl"),
                        Label("Fotos anzeigen").addClass("color-black").setTextSize("2xl")
                    )
                ).addClass("bg-white").setBorderRadius("tiny"),
                Grid(
                    Image("event2.webp", "event2"),
                    Content(
                        Label("Rave am Freitag").addClass("color-black").addClass("bold").setTextSize("2xl"),
                        Label("Fotos anzeigen").addClass("color-black").setTextSize("2xl")
                    )
                ).addClass("bg-white").setBorderRadius("tiny"),
            ).setDirection("column").setGap("80px").setPadding("0 80px").setJustifyItems("center"),
        ).setPadding("0 0 90px 0"),
        Grid(
            Label("Interstellar Sound Kollektiv").addClass("color-black").setTextSize("2xl").addClass("bold"),
            Label("Kontaktiere uns").addClass("color-black").setTextSize("2xl"),
            Label("asd@asd.de").addClass("color-black").setTextSize("2xl"),
            Label("123456789").addClass("color-black").setTextSize("2xl"),
            Label("Impressum").addClass("color-black").setTextSize("2xl"),
        ).setDirection("column").setGap("20px").setJustifyItems("center").addClass("bg-white").setPadding("20px"),
    )
);

isMobile.map(mobile => console.log(mobile));