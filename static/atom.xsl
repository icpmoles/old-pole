<xsl:stylesheet 
  version="2.0" 
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:atom="http://www.w3.org/2005/Atom"
  exclude-result-prefixes="atom"
>
<xsl:output method="xml" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html>
      <head>
        <title><xsl:value-of select="atom:feed/atom:title"/>RSS Feed</title>
        <style type="text/css">@import url(/rss.css?rss=true);</style>
      </head>
      <body style="font-family:Arial;font-size:12pt;background-color:#EEEEEE">
      <div id="explanation">
      <h1>IcpMoles' blog RSS Feed</h1>
      <p>You are viewing an <acronym title="Really Simple Syndication">RSS</acronym> feed.  An RSS feed is a file
      allowing users a way to read updates to a website either through a third party RSS aggregator or other form of RSS
      syndication service.  You can find out more about the RSS file format at the
      <a href="https://en.wikipedia.org/wiki/RSS_(file_format)">Wikipedia RSS entry</a>.</p>
      <p>You may use the <acronym title="Uniform Resource Locater">URL</acronym> of this document for any RSS purposes.</p>
    </div>
    <div id="content">
        <xsl:apply-templates select="atom:feed/atom:entry" />
    </div>
      </body>
    </html>
  </xsl:template>

  <xsl:template match="atom:entry">
    <article>
      <a href="{atom:id}" rel="bookmark">
        <h2>
        <xsl:value-of select="atom:section"/>: <xsl:value-of select="atom:title"/>
        </h2>
      </a>
      <a href="{atom:id}" rel="bookmark">
      <time><xsl:value-of select="atom:published" /></time>
      </a>
      <xsl:value-of select="atom:preview"/>
    </article>
  </xsl:template>
</xsl:stylesheet>