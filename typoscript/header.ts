lib.myheader = COA
lib.myheader.wrap = <header><div id="header" data-role="header"> |<!-- interior end--></div></header>

# Add the masthead for site title / logo.
lib.myheader.10 = COA
lib.myheader.10 {
	10 = TEXT
        10 {
             data = page:title
             wrap = <h1>|</h1>
            }
        20 = TEXT
	20 {
		value = Home
		typolink.parameter = {$siteHomePid}
		typolink.ATagParams = data-icon="home" data-iconpos="notext" data-direction="reverse" class="ui-btn-right jqm-home"
		wrap = |
	}
	30 = HMENU
	30 {
					special = list
					special.value = {$headerNavigationIncludeList}
					1 = TMENU
					1 {
									noBlur = 1
									wrap = <nav><div data-role="navbar"><ul>|</ul></div></nav>
									NO = 1
									NO.ATagTitle.field = abstract // description // subtitle
									NO.allWrap = <li>|</li>
									NO.linkWrap = |
									NO.stdWrap.htmlSpecialChars = 1
									CUR < .NO
									CUR = 1
									CUR.allWrap = <li class="ui-btn-active">|</li>
									CUR.doNotLinkIt = 1
									CUR.stdWrap.htmlSpecialChars = 1
						 }
	}

}