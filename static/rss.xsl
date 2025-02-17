<?xml version="1.0" encoding="iso-8859-1"?>
<xsl:stylesheet 
  version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
>
<xsl:template match="/">
<html>
  <head>
    <title><xsl:value-of select="rss/channel/title"/>RSS Feed</title>
    <style type="text/css">@import url(/rss.css);</style>
  </head>
  <body>
    <div id="explanation">
      <h1>IcpMoles' blog RSS Feed</h1>
      <p>You are viewing an <acronym title="Really Simple Syndication">RSS</acronym> feed.  An RSS feed is a file
      allowing users a way to read updates to a website either through a third party RSS aggregator or other form of RSS
      syndication service.  You can find out more about the RSS file format at the
      <a href="https://en.wikipedia.org/wiki/RSS_(file_format)">Wikipedia RSS entry</a>.</p>
      <p>You may use the <acronym title="Uniform Resource Locater">URL</acronym> of this document for any RSS purposes.</p>
    </div>
    <div id="content">
      <xsl:for-each select="rss/channel/item">
      <div class="article">
        <h2><a href="{link}" rel="bookmark"><xsl:value-of select="title"/></a></h2>
        <p><xsl:value-of select="pubDate"/></p>
        <xsl:value-of select="preview"/>
      </div>
      </xsl:for-each>
    </div>
  </body>
</html>
</xsl:template>
</xsl:stylesheet>