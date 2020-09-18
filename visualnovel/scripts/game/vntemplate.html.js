<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Security-Policy" content="default-src 'self' data: gap: https://ssl.gstatic.com 'unsafe-eval'; style-src 'self' 'unsafe-inline'; media-src *">
        <meta name="format-detection" content="telephone=no">
        <meta name="msapplication-tap-highlight" content="no">
        <meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, target-densitydpi=device-dpi">
        <!-- Place your game title here -->
        <title>Game Title</title>
        <!-- Place a description of your game here -->
        <meta name="description" content="Description of the game." />
        <link rel="stylesheet" href="css/style.css" />
        <link rel="stylesheet" href="css/zerogrid.css" /> 
    </head>
    <body>
        <div class="zerogrid">
            <div class="row">
                <!-- Define the game canvas here, including dimensions and style -->
                <div class="col-full">
                    <div class="wrap-col">
                        <canvas id="stage" class="col-full" style="border:1px solid black" oncontextmenu="return false;" onselectstart="return false;">
                            <!-- Place your custom message here if user is not using an HTML5-capable browser -->
                            Your browser does not appear to support HTML5.  Try upgrading your browser to the latest version.
                        </canvas>
                    </div>
                </div>
                <!-- If using non-standard fonts, load it here. This is a workaround. -->
                <!--<div style="font-family:custom_font_name">&nbsp;</div>-->
            </div>
        </div><!-- END GRID -->
        <div class="clear"></div>
        <div id="footer">
            &copy; Copyright 2018 vn-Canvas Responsive Template.
        </div>

        <!-- Uncomment cordova.js script call if using Cordova -->
        <!--<script type="text/javascript" src="cordova.js"></script>-->
        <script data-main="scripts/init.js" src="scripts/lib/require.js"></script>
    </body>
</html>
