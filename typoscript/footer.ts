lib.footer = COA
lib.footer {
	 9 = TEXT
	 9.value = <div id="footerMenu">

	20 = HMENU
	20 {
					special = list
					special.value = {$headerNavigationIncludeList}
					1 = TMENU
					1 {
									noBlur = 1
									wrap = <ul id="footerMenuUtils" class="ui-bar" data-role="controlgroup" data-type="horizontal" >|</ul>
									NO = 1
									NO.ATagTitle.field = abstract // description // subtitle
									NO.allWrap = <li data-role="button">|</li>
									NO.linkWrap = |
									NO.stdWrap.htmlSpecialChars = 1
									CUR < .NO
									CUR = 1
									CUR.allWrap = <li data-role="button"><strong>|</strong></li>
									CUR.doNotLinkIt = 1
									CUR.stdWrap.htmlSpecialChars = 1
						 }
	}



	49 = TEXT
	49.value = </div>
	50 = HTML
	50.value = {$footerText}

}
lib.footer.wrap = <div class="interior">|</div><!-- interior end -->
