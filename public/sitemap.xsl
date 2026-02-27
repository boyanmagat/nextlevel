<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" 
                xmlns:html="http://www.w3.org/TR/REC-html40"
                xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>XML Sitemap</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <style type="text/css">
          body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif; color: #fff; background-color: #000; margin: 40px; }
          a { color: #ec4899; text-decoration: none; }
          a:hover { text-decoration: underline; color: #f472b6; }
          table { border: none; border-collapse: collapse; width: 100%; margin-top: 20px; font-size: 14px; }
          th { text-align: left; padding: 14px; background-color: #18181b; border-bottom: 2px solid #27272a; color: #a1a1aa; }
          td { padding: 14px; border-bottom: 1px solid #27272a; }
          tr:hover td { background-color: #18181b; }
          .header { margin-bottom: 30px; }
          .header h1 { font-weight: 800; font-size: 2rem; margin-bottom: 5px; }
          .header p { color: #a1a1aa; }
        </style>
      </head>
      <body>
        <div id="content">
          <div class="header">
            <h1>XML Sitemap</h1>
            <p>
              This is an XML Sitemap, meant for consumption by search engines.
            </p>
          </div>
          
          <xsl:if test="count(sitemap:sitemapindex/sitemap:sitemap) &gt; 0">
            <p style="color: #a1a1aa; margin-bottom: 10px;">
              This XML Sitemap Index file contains <strong><xsl:value-of select="count(sitemap:sitemapindex/sitemap:sitemap)"/></strong> sitemaps.
            </p>
            <table id="sitemap" cellpadding="3">
              <thead>
                <tr>
                  <th width="70%">Sitemap URL</th>
                  <th width="30%">Last Modified</th>
                </tr>
              </thead>
              <tbody>
              <xsl:for-each select="sitemap:sitemapindex/sitemap:sitemap">
                <xsl:variable name="sitemapURL">
                  <xsl:value-of select="sitemap:loc"/>
                </xsl:variable>
                <tr>
                  <td>
                    <a href="{$sitemapURL}"><xsl:value-of select="sitemap:loc"/></a>
                  </td>
                  <td style="color: #a1a1aa;">
                    <xsl:value-of select="concat(substring(sitemap:lastmod,0,11),concat(' ', substring(sitemap:lastmod,12,5)))"/>
                  </td>
                </tr>
              </xsl:for-each>
              </tbody>
            </table>
          </xsl:if>
          
          <xsl:if test="count(sitemap:sitemapindex/sitemap:sitemap) &lt; 1">
            <p style="color: #a1a1aa; margin-bottom: 10px;">
              This XML Sitemap contains <strong><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></strong> URLs.
            </p>
            <table id="sitemap" cellpadding="3">
              <thead>
                <tr>
                  <th width="60%">URL</th>
                  <th width="10%">Priority</th>
                  <th width="10%">Change Freq</th>
                  <th width="20%">Last Modified</th>
                </tr>
              </thead>
              <tbody>
                <xsl:variable name="lower" select="'abcdefghijklmnopqrstuvwxyz'"/>
                <xsl:variable name="upper" select="'ABCDEFGHIJKLMNOPQRSTUVWXYZ'"/>
                <xsl:for-each select="sitemap:urlset/sitemap:url">
                  <tr>
                    <td>
                      <xsl:variable name="itemURL">
                        <xsl:value-of select="sitemap:loc"/>
                      </xsl:variable>
                      <a href="{$itemURL}">
                        <xsl:value-of select="sitemap:loc"/>
                      </a>
                    </td>
                    <td style="color: #a1a1aa;">
                      <xsl:value-of select="concat(sitemap:priority*100,'%')"/>
                    </td>
                    <td style="color: #a1a1aa;">
                      <xsl:value-of select="concat(translate(substring(sitemap:changefreq, 1, 1),concat($lower, $upper),concat($upper, $lower)),substring(sitemap:changefreq, 2))"/>
                    </td>
                    <td style="color: #a1a1aa;">
                      <xsl:value-of select="concat(substring(sitemap:lastmod,0,11),concat(' ', substring(sitemap:lastmod,12,5)))"/>
                    </td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </xsl:if>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
