(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5855e9ed"],{"1f19":function(e,a,t){"use strict";t.r(a);var n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"card card-custom bgi-no-repeat bgi-size-cover gutter-b w-100"},[t("router-link",{attrs:{to:{path:"/builder",query:{task:this.task_name}}}},[t("div",{staticClass:"card-body"},[t("div",[t("img",{staticStyle:{height:"48px"},attrs:{src:this.task_logo}})]),"ABSA"==e.task_name?t("div",{staticClass:"text-dark font-weight-bolder font-size-h3 mt-3"},[e._v(" "+e._s(e.task_info.full_name)+" ")]):t("div",{staticClass:"text-dark font-weight-bolder font-size-h2 mt-3"},[e._v(" "+e._s(e.task_info.full_name)+" ")]),t("p",{staticClass:"text-muted font-weight-bold font-size-lg mt-1 bottom-align-text"},[e._v(" "+e._s(e.task_info.available_domain.length)+" domain transformations"),t("br"),e._v(" "+e._s(e.task_info.available_ut.length)+" universal transformations ")])])])],1)},r=[],i={name:"widget-task",props:{task:String},data:function(){var e=t("b485")("./"+this.task+"/task_description.json");return{task_name:this.task,task_info:e,task_logo:"media/logos/task_logo/"+this.task+".jpg"}}},o=i,s=t("2877"),d=Object(s["a"])(o,n,r,!1,null,null,null);a["default"]=d.exports},"4ed0":function(e){e.exports=JSON.parse('{"name":"NER","full_name":"Named Entity Recognition","description":"Named entity recognition is the task of tagging entities in text with their corresponding type.","available_domain":["ConcatSent","CrossCategory","EntTypos","OOV","SwapLonger"],"available_ut":["RevNeg","AddRmvPunc","AppendIrr","Contraction","InsertAdv","Keyboard","MLMSuggestion","Ocr","SpellingError","SwapAnt-WordNet","SwapNum","SwapSyn-WordEmbedding","SwapSyn-WordNet","Tense","TwitterType","Typos-random","WordCase-lower","WordCase-title","WordCase-upper","WordCase"]}')},"7aec":function(e){e.exports=JSON.parse('{"name":"SM","full_name":"Semantic Matching","description":"This task need model to identify whether two sentences express the same meaning.","available_domain":["SwapWord","SwapNum","Overlap"],"available_ut":["Typos","Ocr","Keyboard","AddPunc","RmvPunc","AddNeg","RmvNeg","SwapSyn-WordNet","SwapSyn-WordEmbedding","SwapAnt-WordNet","SpellingError","Contraction","Tense","SwapNamedEnt","SwapNum","InsertAdv","MLMSuggestion","AppendIrr","WordCase","TwitterType","BackTrans","Prejudge"]}')},"7b5f":function(e){e.exports=JSON.parse('{"name":"POS","full_name":"Part-of-speech tagging","description":"Part-of-speech tagging (POS tagging) is the task of tagging a word in a text with its part of speech. A part of speech is a category of words with similar grammatical properties. Common English parts of speech are noun, verb, adjective, adverb, pronoun, preposition, conjunction, etc.","available_domain":["SwapMultiPOSNN","SwapMultiPOSJJ","SwapMultiPOSVB","SwapMultiPOSRB","SwapPrefix"],"available_ut":["InsertAdv","AppendIrr","WordCase-lower","WordCase-title","WordCase-upper","Contraction","SwapNamedEnt","Keyboard","MLMSuggestion","SwapNum","Ocr","AddPunc","RevNeg","SpellingError","TwitterType","Typos","SwapSyn-WordEmbedding","SwapAnt-WordNet","SwapSyn-WordNet","Prejudice_Loc_Africa_India_Middle East","Prejudice_Loc_America_Europe_China_Japan","Prejudice_Name_man","Prejudice_Name_woman"]}')},a578:function(e){e.exports=JSON.parse('{"name":"CWS","full_name":"Chinese Word Segmentation","description":"Chinese Word Segmentation is the task of segmenting the correct words in a specific context","available_domain":["SwapName","SwapNum","SwapVerb","SwapContraction","SwapSyn","SwapRedup","SwapGene"],"available_ut":[]}')},a70b:function(e){e.exports=JSON.parse('{"name":"TC","full_name":"Text Classification","description":"Text classification is the task of assigning a sentence or document an appropriate category. The categories depend on the chosen dataset and can range from topics. We only chose large-scale dataset.","available_domain":[],"available_ut":["Typos","Ocr","Keyboard","AddPunc","AddNeg","SwapSyn-WordNet","SwapSyn-WordEmbedding","SpellingError","Contraction","Tense","SwapNamedEnt","SwapNum","InsertAdv","MLMSuggestion","AppendIrr","WordCase-upper","WordCase-lower","WordCase-title","TwitterType"]}')},aa18:function(e){e.exports=JSON.parse('{"name":"COREF","full_name":"Coreference Resolution","description":"Coreference resolution is the task of finding all expressions that refer to the same entity in a text. It is an important step for a lot of higher level NLP tasks that involve natural language understanding such as document summarization, question answering, and information extraction.","available_domain":["RndConcat","RndDelete","RndInsert","RndRepeat","RndReplace","RndShuffle"],"available_ut":["Typos","Ocr","Keyboard","AddPunc","AddNeg","SwapSyn-WordNet","SwapSyn-WordEmbedding","SwapAnt-WordNet","SpellingError","Contraction","Tense","SwapNamedEnt","SwapNum","InsertAdv","MLMSuggestion","AppendIrr","WordCase-title","WordCase-upper","WordCase-lower","TwitterType"]}')},adbc:function(e){e.exports=JSON.parse('{"name":"NLI","full_name":"Natural Language Inference","description":"Natural language inference is the task of determining whether a \\"hypothesis\\" is true (entailment), false (contradiction), or undetermined (neutral) given a \\"premise\\".","available_domain":["SwapAnt","AddSen","NumWord","Overlap"],"available_ut":["Typos","Ocr","Keyboard","AddPunc","RmvPunc","AddNeg","RmvNeg","SwapSyn-WordNet","SwapSyn-WordEmbedding","SwapAnt-WordNet","SpellingError","Contraction","Tense","SwapNamedEnt","SwapNum","InsertAdv","MLMSuggestion","AppendIrr","WordCase","TwitterType","BackTrans"]}')},b18a:function(e){e.exports=JSON.parse('{"name":"ABSA","full_name":"Aspect-Based Sentiment Analysis","description":"Aspect-based sentiment analysis (ABSA) is an advanced sentiment analysis task that aims to classify the sentiment towards a specific aspect.","available_domain":["RevTgt","RevNon","AddDiff"],"available_ut":["Typos","Ocr","Keyboard","AddPunc","RmvPunc","AddNeg","RmvNeg","SwapSyn-WordNet","SwapSyn-WordEmbedding","SpellingError","Contraction","Tense","SwapNamedEnt","SwapNum","InsertAdv","MLMSuggestion","AppendIrr","WordCase","TwitterType"]}')},b485:function(e,a,t){var n={"./ABSA/task_description.json":"b18a","./COREF/task_description.json":"aa18","./CWS/task_description.json":"a578","./DP/task_description.json":"eb9a","./MRC/task_description.json":"ecf5","./NER/task_description.json":"4ed0","./NLI/task_description.json":"adbc","./POS/task_description.json":"7b5f","./RE/task_description.json":"bcc6","./SA/task_description.json":"fd07","./SM/task_description.json":"7aec","./TC/task_description.json":"a70b"};function r(e){var a=i(e);return t(a)}function i(e){if(!t.o(n,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=i,e.exports=r,r.id="b485"},bcc6:function(e){e.exports=JSON.parse('{"name":"RE","full_name":"Relation Extraction","description":"Relation extraction aims to classify relation types of given entity pairs in text","available_domain":["SwapEnt-LowFreq","SwapEnt-MultiType","SwapEnt-SamEtype","SwapTriplePos-Age","SwapTriplePos-Employee","SwapTriplePos-Birth","InsertClause"],"available_ut":["Typos","Ocr","Keyboard","AddPunc","SwapSyn-WordNet","SwapSyn-WordEmbedding","SwapAnt-WordNet","SpellingError","Contraction","Tense","InsertAdv","MLMSuggestion","AppendIrr","WordCase-upper","TwitterType"]}')},eb9a:function(e){e.exports=JSON.parse('{"name":"DP","full_name":"Dependency Parsing","description":"Dependency parsing is the task of extracting a dependency parse of a sentence that represents its grammatical structure and defines the relationships between “head” words and words, which modify those heads.","available_domain":["AddSubtree","RemoveSubtree"],"available_ut":["Typos","Ocr","Keyboard","AddPunc","RmvPunc","AddNeg","RmvNeg","SwapSyn-WordNet","SwapSyn-WordEmbedding","SwapAnt-WordNet","SpellingError","Contraction","Tense","SwapNamedEnt","SwapNum","InsertAdv","MLMSuggestion","AppendIrr","WordCase","TwitterType"]}')},ecf5:function(e){e.exports=JSON.parse('{"name":"MRC","full_name":"Machine Reading Comprehension","description":"Machine Reading Comprehension is the task is to read and comprehend a given text passage, and then answer questions based on it.","available_domain":["ModifyPos","AddSentDiverse","PerturbAnswer","PerturbQuestion"],"available_ut":["Typos","Ocr","Keyboard","AddPunc","SwapSyn-WordNet","SwapSyn-WordEmbedding","Contraction","Tense","InsertAdv","AppendIrr","WordCase","TwitterType","Prejudice"]}')},fd07:function(e){e.exports=JSON.parse('{"name":"SA","full_name":"Sentiment Analysis","description":"Sentiment analysis is the task of classifying the polarity of a given text.","available_domain":["SwapSpecialEnt-Movie","SwapSpecialEnt-Person","AddSum-Movie","AddSum-Person","DoubleDenial"],"available_ut":["Typos","Ocr","Keyboard","AddPunc","AddNeg","SwapSyn-WordNet","SwapSyn-WordEmbedding","SpellingError","Contraction","Tense","SwapNamedEnt","SwapNum","InsertAdv","MLMSuggestion","AppendIrr","WordCase-upper","WordCase-lower","WordCase-title","TwitterType"]}')}}]);
//# sourceMappingURL=chunk-5855e9ed.eb4d8f0f.js.map