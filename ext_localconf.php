<?php

$GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['templavoila_framework']['skins'][] = $_EXTKEY;
t3lib_extMgm::addPageTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:skin_f2mobile/tsconfig_page.txt">');
?>
