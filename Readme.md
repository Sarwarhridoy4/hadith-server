# Welcome to my Hadith server.

<b>Feature:</b>
<ul>
<li>Random hadith on each Refresh</li>
<li>Search using fiedname:
<ul>
  <li>
    hadith
  </li>
  <li>
    narrator
  </li>
  <li>
    source
  </li>
  <li>
    reference
  </li>
</ul>
</li>
</ul>


<b>Tach Stack:</b>
<ul>
<li>MongoDB</li>
<li>Mongoose</li>
<li>Express</li>
<li>Vercel</li>
</ul>

[API](https://hadith-server.vercel.app/api/random-hadith)

# Search Hadith by:

<ul>
<li>hadith</li>
<li>narrator</li>
<li>source</li>
<li>reference</li>
</ul>

# API Structure:
To get all hadith:
<br/>
<code>/all-hadith</code>
<br/>
To get a random hadith:
<br/>
<code>/random-hadith</code>
<br/>
<code>/search/:reference/:348</code>
<br/>
<code>/:category</code> refers fildname for search like:

<ul>
<li>/search/hadith/whatever-you-search</li>
<li>/search/narrator/whatever-you-search</li>
<li>/search/source/whatever-you-search</li>
<li>/search/reference/whatever-you-search</li>
</ul>

<code>/:searchString</code> refers what to search in field
