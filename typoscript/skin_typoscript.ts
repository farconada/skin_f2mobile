##############################################################################
#
# This is a modified version of skin_bn_wireframe developed by Ron Hall of BusyNoggin, Inc.
#
##############################################################################
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:skin_f2mobile/typoscript/footer.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:skin_f2mobile/typoscript/header.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:skin_f2mobile/typoscript/boxes.ts">

lib.stdheader.10.key.ifEmpty = 3
plugin.tx_indexedsearch.templateFile = EXT:indexed_search/pi/template_css.tmpl



##############################################################
# This is TypoScript used to modify the core templates to
# display this skin. Rewrite the header, footer, pre code and
# post code libraries and more when needed to change structure
##############################################################

preCodeHeader = TEXT
preCodeHeader.dataWrap = <div id="pageWrap_{page:uid}" data-role="page"  data-add-back-btn="true" >|
postCodeHeader >



preCodeFeature >
postCodeFeature >

preCodeContent = COA
preCodeContent.10 = HTML
preCodeContent.10.value = <div id="pageContent" data-role="content">


preCodeGeneratedContent-1 >
postCodeGeneratedContent-1 >

preCodeContentBlock-1 >
postCodeContentBlock-1 >



preCodeGeneratedContent-2 >
postCodeContentBlock-2 >

preCodeContentBlock-3 >
postCodeContentBlock-3 >

preCodeGeneratedContent-2 >
postCodeGeneratedContent-2 >


preCodeFooter = COA
preCodeFooter.10 = HTML
preCodeFooter.10.value (
	<div class="clear"></div>
	</div>
	<!-- end #pageContent -->
	<div class="clear"></div>
	<footer><div id="footer" data-role="footer" data-position="fixed" data-theme="a">
)
preCodeFooter.20 >


postCodeFooter = HTML
postCodeFooter.value (

	</div>
	</footer>
	<!-- end #footer -->
	</div>
	<!-- end #pageWrap  -->
)



### Lets table classes be added in the RTE
lib.parseFunc_RTE.externalBlocks.table.stdWrap.HTMLparser.tags.table.fixAttrib.class.list >
lib.parseFunc_RTE.nonTypoTagStdWrap.encapsLines.addAttributes.P.class >



header >
header =< lib.myheader
footer =< lib.footer


# "Menu of subpages to these pages (with abstract)"
tt_content.menu.20.4 {
	special = directory
	wrap >
	1 >
	1 = TMENU
	1 {
		target = {$PAGE_TARGET}
		wrap = <div class="sectionMenuWrapper"><div class="sectionMenu">|</div><div class="clearOnly"></div></div>
		NO {
			allWrap = <div class="menuItem"> | </div>
			before.cObject = COA
			before.cObject {
				10 = IMAGE
				10.if.isTrue.field = media
				10.file.import = uploads/media/
				10.file.import.field = media
				10.file.import.listNum = 0
				10.file.width = 108m
				10.alttext.field = title
				10.params = align="left"
				10.stdWrap.typolink.parameter.field = uid
			}

			after.cObject = COA
			after.cObject {
				30 = TEXT
				30.field = abstract
				30.wrap = <p>|</p></div>
			}

			stdWrap.override.field = subtitle
			linkWrap = <div class="wrapper"><h3>|</h3>
			noBlur = 1
		}
	}
}


page {
	config {
		language = es
		cache = 1
		locale_all = es_ES
		no_cache = 0
		xhtml_cleaning = all
		htmlTag_langKey = es-ES
		index_enable = 1
		metaCharset = utf-8
		additionalHeaders = Content-Type:text/html;charset=utf-8
		doctype = html5 
		xhtmlDoctype = html5
		xmlprologue = none
		linkVars = type, L
		htmlTag_setParams =
	}
}
config.noPageTitle = 2 
page.headerData.5 = TEXT 
page.headerData.5.field = subtitle // title 
page.headerData.5.wrap = <title> |</title>

page.includeJSlibs {
    jquery = http://code.jquery.com/jquery-1.6.1.min.js
        jquery.external = 1
    jqmobileinit = fileadmin/jqmobile.js
    jquerymobile = http://code.jquery.com/mobile/1.0b1/jquery.mobile-1.0b1.min.js
        jquerymobile.external = 1
        }
         
page.includeCSS {
    jquerymobile = http://code.jquery.com/mobile/1.0b1/jquery.mobile-1.0b1.min.css
        jquerymobile.external = 1
        }

# Remove useless classes (h1 class="csc-firstHeader" and so on)
lib.stdheader.3.headerClass >
 
lib.stdheader.stdWrap.dataWrap >
tt_content.stdWrap.innerWrap.cObject.default >
 
# Remove class="bodytext" to paragraphs
lib.parseFunc_RTE.nonTypoTagStdWrap.encapsLines.addAttributes.P.class >
 
# Change header levels: h1 -> h2, h2 -> h3, h3 -> h4
lib.stdheader.10.1 < lib.stdheader.10.2
lib.stdheader.10.2 < lib.stdheader.10.3
lib.stdheader.10.3 < lib.stdheader.10.4
tt_content.menu.20.2.1.wrap = <ul data-role="listview" data-inset="true">|</ul> 
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:skin_f2mobile/typoscript/mobile.ts">
