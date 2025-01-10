import hljs from 'highlight.js/lib/core';
import java from 'highlight.js/lib/languages/java'; 
import 'highlight.js/styles/github-dark.css';

export function activeCodeHighlight() {
    hljs.registerLanguage('java', java);

    document.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('.java').forEach((block) => {
            hljs.highlightBlock(block);
        });
    });
}