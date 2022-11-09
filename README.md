

# Setup

## Install
The index.html is generated from the source code fantastinomio.twee
it is generated with this command line:

tweego fantastinomio.twee -o index.html


## Adapt the story element library
1) Name and place all story element pictures in a sub folder (such as "braganomio")
1) Edit on an external spreadsheet, you can follow the model ods in the extra folder, indicate the relative path to the image subfolder
2) Transform data to a json file, place json in main folder "storyobjectdata.json"
OR
3) Choose to use external google sheet, https://sheets.googleapis.com/v4/spreadsheets/" + doc_id + "/values/" + range + "?key=" + apikey  (this is also the link which you can use to download json file)
4) Modify "Import_story_elements.js" accordingly (comment out the non-required method)

5) place the folder on a server and start index.html
for a local or offline setup you can also use the line "python3 -m http.server" from the main directory and start http://0.0.0.0:8000/ in your local browser


# Story elements

## Text2speech, speech synthesis:
These are the language tags with which languages can be determined in the "Language" column: the system will understand labels such as "German", "Italian"...

"ar-Arabic","cs-Czech","da-Danish","de-German","de-Deutsch","el-Greek","en-English","eo-Esperanto","es-Spanish","et-Estonian","fi-Finnish","fr-French","he-Hebrew","hi-Hindi","hu-Hungarian","id-Indonesian","it-Italian","it-Italiano","ja-Japanese","ko-Korean","la-Latin","lt-Lithuanian","lv-Latvian","nb-Norwegian Bokmal","nl-Dutch","nn-Norwegian Nynorsk","no-Norwegian","pl-Polish","pt-Portuguese","pt-Português","ro-Romanian","ru-Russian","sk-Slovak","sl-Slovenian","sq-Albanian","sr-Serbian","sv-Swedish","th-Thai","tr-Turkish","zh-Chinese"




## Copyright (C) 2022  Michael Schlauch

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
    
## Open Dyslexic Font
Copyright

Copyright (c) 2003 by Bitstream, Inc. All Rights Reserved. Bitstream Vera is a trademark of Bitstream, Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy of the fonts accompanying this license (“Fonts”) and associated documentation files (the “Font Software”), to reproduce and distribute the Font Software, including without limitation the rights to use, copy, merge, publish, distribute, and/or sell copies of the Font Software, and to permit persons to whom the Font Software is furnished to do so, subject to the following conditions:

The above copyright and trademark notices and this permission notice shall be included in all copies of one or more of the Font Software typefaces.

The Font Software may be modified, altered, or added to, and in particular the designs of glyphs or characters in the Fonts may be modified and additional glyphs or characters may be added to the Fonts, only if the fonts are renamed to names not containing either the words “Bitstream” or the word “Vera”.

This License becomes null and void to the extent applicable to Fonts or Font Software that has been modified and is distributed under the “Bitstream Vera” names.

The Font Software may be sold as part of a larger software package but no copy of one or more of the Font Software typefaces may be sold by itself.

THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL BITSTREAM OR THE GNOME FOUNDATION BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM OTHER DEALINGS IN THE FONT SOFTWARE.
