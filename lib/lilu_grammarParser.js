// Generated from grammar/lilu_grammar.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var lilu_grammarListener = require('./lilu_grammarListener').lilu_grammarListener;
var lilu_grammarVisitor = require('./lilu_grammarVisitor').lilu_grammarVisitor;

var grammarFileName = "lilu_grammar.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003G\u01c4\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0004",
    "\u001f\t\u001f\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003G\n\u0003\u0003",
    "\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0007\u0005P\n\u0005\f\u0005\u000e\u0005S\u000b\u0005\u0003\u0006",
    "\u0003\u0006\u0005\u0006W\n\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0007\u0006\\\n\u0006\f\u0006\u000e\u0006_\u000b\u0006\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0005\u0007d\n\u0007\u0003\b\u0005\bg\n\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0007\bm\n\b\f\b\u000e\bp\u000b\b\u0003\b",
    "\u0003\b\u0003\t\u0003\t\u0003\t\u0003\t\u0007\tx\n\t\f\t\u000e\t{\u000b",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0007\t\u0082\n\t\f\t\u000e",
    "\t\u0085\u000b\t\u0007\t\u0087\n\t\f\t\u000e\t\u008a\u000b\t\u0003\n",
    "\u0003\n\u0003\n\u0003\n\u0007\n\u0090\n\n\f\n\u000e\n\u0093\u000b\n",
    "\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0007\n\u009c",
    "\n\n\f\n\u000e\n\u009f\u000b\n\u0003\n\u0003\n\u0007\n\u00a3\n\n\f\n",
    "\u000e\n\u00a6\u000b\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0005\u000b\u00ad\n\u000b\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0005\u000b\u00b3\n\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003\r",
    "\u0003\r\u0006\r\u00c0\n\r\r\r\u000e\r\u00c1\u0003\r\u0003\r\u0003\u000e",
    "\u0005\u000e\u00c7\n\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0005\u000f\u00ce\n\u000f\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0007\u000f",
    "\u00d7\n\u000f\f\u000f\u000e\u000f\u00da\u000b\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0005\u000f\u00e1\n\u000f",
    "\u0003\u0010\u0003\u0010\u0005\u0010\u00e5\n\u0010\u0003\u0010\u0005",
    "\u0010\u00e8\n\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0005\u0010\u00ee\n\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0005\u0010\u00f6\n\u0010\u0003\u0011",
    "\u0003\u0011\u0003\u0011\u0005\u0011\u00fb\n\u0011\u0003\u0011\u0003",
    "\u0011\u0003\u0011\u0005\u0011\u0100\n\u0011\u0007\u0011\u0102\n\u0011",
    "\f\u0011\u000e\u0011\u0105\u000b\u0011\u0003\u0011\u0003\u0011\u0003",
    "\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0005\u0012\u010e",
    "\n\u0012\u0003\u0013\u0003\u0013\u0003\u0013\u0005\u0013\u0113\n\u0013",
    "\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003\u0014\u0005\u0014",
    "\u011a\n\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003",
    "\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003",
    "\u0014\u0005\u0014\u0127\n\u0014\u0003\u0015\u0003\u0015\u0003\u0015",
    "\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015",
    "\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015",
    "\u0003\u0015\u0003\u0015\u0007\u0015\u013a\n\u0015\f\u0015\u000e\u0015",
    "\u013d\u000b\u0015\u0003\u0015\u0003\u0015\u0005\u0015\u0141\n\u0015",
    "\u0003\u0016\u0003\u0016\u0003\u0016\u0007\u0016\u0146\n\u0016\f\u0016",
    "\u000e\u0016\u0149\u000b\u0016\u0003\u0016\u0003\u0016\u0003\u0017\u0003",
    "\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003",
    "\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003",
    "\u0017\u0003\u0017\u0003\u0017\u0005\u0017\u015d\n\u0017\u0005\u0017",
    "\u015f\n\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003",
    "\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003",
    "\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003",
    "\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003",
    "\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0007\u0017\u017c",
    "\n\u0017\f\u0017\u000e\u0017\u017f\u000b\u0017\u0003\u0018\u0003\u0018",
    "\u0003\u0018\u0003\u0018\u0003\u0018\u0005\u0018\u0186\n\u0018\u0003",
    "\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0005\u0018\u018c\n\u0018",
    "\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0019\u0003\u0019\u0003\u001a",
    "\u0005\u001a\u0194\n\u001a\u0003\u001a\u0003\u001a\u0005\u001a\u0198",
    "\n\u001a\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0005\u001b",
    "\u019e\n\u001b\u0003\u001b\u0003\u001b\u0006\u001b\u01a2\n\u001b\r\u001b",
    "\u000e\u001b\u01a3\u0003\u001b\u0003\u001b\u0003\u001c\u0003\u001c\u0005",
    "\u001c\u01aa\n\u001c\u0003\u001d\u0006\u001d\u01ad\n\u001d\r\u001d\u000e",
    "\u001d\u01ae\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e",
    "\u0007\u001e\u01b6\n\u001e\f\u001e\u000e\u001e\u01b9\u000b\u001e\u0003",
    "\u001e\u0003\u001e\u0005\u001e\u01bd\n\u001e\u0003\u001e\u0003\u001e",
    "\u0003\u001e\u0003\u001f\u0003\u001f\u0003\u001f\u0002\u0005\u0010\u0012",
    ", \u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a",
    "\u001c\u001e \"$&(*,.02468:<\u0002\u000b\u0007\u0002\t\t\u0012\u0012",
    "\u0015\u0015\u001d\u001dCC\u0004\u0002\u001e\u001e  \u0004\u0002&&(",
    "(\u0004\u0002=>BB\u0003\u0002;<\u0003\u0002\u0004\u0005\u0003\u0002",
    "58\u0003\u0002\u0018\u001a\u0004\u0002\u0006\u0007<<\u0002\u01f0\u0002",
    ">\u0003\u0002\u0002\u0002\u0004F\u0003\u0002\u0002\u0002\u0006H\u0003",
    "\u0002\u0002\u0002\bJ\u0003\u0002\u0002\u0002\nV\u0003\u0002\u0002\u0002",
    "\f`\u0003\u0002\u0002\u0002\u000ef\u0003\u0002\u0002\u0002\u0010s\u0003",
    "\u0002\u0002\u0002\u0012\u008b\u0003\u0002\u0002\u0002\u0014\u00ac\u0003",
    "\u0002\u0002\u0002\u0016\u00b7\u0003\u0002\u0002\u0002\u0018\u00ba\u0003",
    "\u0002\u0002\u0002\u001a\u00c6\u0003\u0002\u0002\u0002\u001c\u00e0\u0003",
    "\u0002\u0002\u0002\u001e\u00f5\u0003\u0002\u0002\u0002 \u00f7\u0003",
    "\u0002\u0002\u0002\"\u010d\u0003\u0002\u0002\u0002$\u010f\u0003\u0002",
    "\u0002\u0002&\u0126\u0003\u0002\u0002\u0002(\u0140\u0003\u0002\u0002",
    "\u0002*\u0142\u0003\u0002\u0002\u0002,\u015e\u0003\u0002\u0002\u0002",
    ".\u0185\u0003\u0002\u0002\u00020\u0190\u0003\u0002\u0002\u00022\u0193",
    "\u0003\u0002\u0002\u00024\u0199\u0003\u0002\u0002\u00026\u01a9\u0003",
    "\u0002\u0002\u00028\u01ac\u0003\u0002\u0002\u0002:\u01bc\u0003\u0002",
    "\u0002\u0002<\u01c1\u0003\u0002\u0002\u0002>?\u0005\u001a\u000e\u0002",
    "?@\u00058\u001d\u0002@\u0003\u0003\u0002\u0002\u0002AG\u0007(\u0002",
    "\u0002BG\u0007&\u0002\u0002CG\u0007%\u0002\u0002DG\u0007)\u0002\u0002",
    "EG\u0007*\u0002\u0002FA\u0003\u0002\u0002\u0002FB\u0003\u0002\u0002",
    "\u0002FC\u0003\u0002\u0002\u0002FD\u0003\u0002\u0002\u0002FE\u0003\u0002",
    "\u0002\u0002G\u0005\u0003\u0002\u0002\u0002HI\t\u0002\u0002\u0002I\u0007",
    "\u0003\u0002\u0002\u0002JQ\u0007C\u0002\u0002KL\u0007/\u0002\u0002L",
    "M\u0005,\u0017\u0002MN\u00070\u0002\u0002NP\u0003\u0002\u0002\u0002",
    "OK\u0003\u0002\u0002\u0002PS\u0003\u0002\u0002\u0002QO\u0003\u0002\u0002",
    "\u0002QR\u0003\u0002\u0002\u0002R\t\u0003\u0002\u0002\u0002SQ\u0003",
    "\u0002\u0002\u0002TU\t\u0003\u0002\u0002UW\u00073\u0002\u0002VT\u0003",
    "\u0002\u0002\u0002VW\u0003\u0002\u0002\u0002WX\u0003\u0002\u0002\u0002",
    "X]\u0005\b\u0005\u0002YZ\u00073\u0002\u0002Z\\\u0005\b\u0005\u0002[",
    "Y\u0003\u0002\u0002\u0002\\_\u0003\u0002\u0002\u0002][\u0003\u0002\u0002",
    "\u0002]^\u0003\u0002\u0002\u0002^\u000b\u0003\u0002\u0002\u0002_]\u0003",
    "\u0002\u0002\u0002`c\u0005\b\u0005\u0002ab\u0007\u0003\u0002\u0002b",
    "d\u0005,\u0017\u0002ca\u0003\u0002\u0002\u0002cd\u0003\u0002\u0002\u0002",
    "d\r\u0003\u0002\u0002\u0002eg\u0007\f\u0002\u0002fe\u0003\u0002\u0002",
    "\u0002fg\u0003\u0002\u0002\u0002gh\u0003\u0002\u0002\u0002hi\u0005\u0006",
    "\u0004\u0002in\u0005\f\u0007\u0002jk\u00072\u0002\u0002km\u0005\f\u0007",
    "\u0002lj\u0003\u0002\u0002\u0002mp\u0003\u0002\u0002\u0002nl\u0003\u0002",
    "\u0002\u0002no\u0003\u0002\u0002\u0002oq\u0003\u0002\u0002\u0002pn\u0003",
    "\u0002\u0002\u0002qr\u00071\u0002\u0002r\u000f\u0003\u0002\u0002\u0002",
    "st\b\t\u0001\u0002ty\u0005\u0006\u0004\u0002uv\u0007/\u0002\u0002vx",
    "\u00070\u0002\u0002wu\u0003\u0002\u0002\u0002x{\u0003\u0002\u0002\u0002",
    "yw\u0003\u0002\u0002\u0002yz\u0003\u0002\u0002\u0002z\u0088\u0003\u0002",
    "\u0002\u0002{y\u0003\u0002\u0002\u0002|}\f\u0003\u0002\u0002}~\u0007",
    "2\u0002\u0002~\u0083\u0005\u0006\u0004\u0002\u007f\u0080\u0007/\u0002",
    "\u0002\u0080\u0082\u00070\u0002\u0002\u0081\u007f\u0003\u0002\u0002",
    "\u0002\u0082\u0085\u0003\u0002\u0002\u0002\u0083\u0081\u0003\u0002\u0002",
    "\u0002\u0083\u0084\u0003\u0002\u0002\u0002\u0084\u0087\u0003\u0002\u0002",
    "\u0002\u0085\u0083\u0003\u0002\u0002\u0002\u0086|\u0003\u0002\u0002",
    "\u0002\u0087\u008a\u0003\u0002\u0002\u0002\u0088\u0086\u0003\u0002\u0002",
    "\u0002\u0088\u0089\u0003\u0002\u0002\u0002\u0089\u0011\u0003\u0002\u0002",
    "\u0002\u008a\u0088\u0003\u0002\u0002\u0002\u008b\u008c\b\n\u0001\u0002",
    "\u008c\u0091\u0005\u0006\u0004\u0002\u008d\u008e\u0007/\u0002\u0002",
    "\u008e\u0090\u00070\u0002\u0002\u008f\u008d\u0003\u0002\u0002\u0002",
    "\u0090\u0093\u0003\u0002\u0002\u0002\u0091\u008f\u0003\u0002\u0002\u0002",
    "\u0091\u0092\u0003\u0002\u0002\u0002\u0092\u0094\u0003\u0002\u0002\u0002",
    "\u0093\u0091\u0003\u0002\u0002\u0002\u0094\u0095\u0007C\u0002\u0002",
    "\u0095\u00a4\u0003\u0002\u0002\u0002\u0096\u0097\f\u0003\u0002\u0002",
    "\u0097\u0098\u00072\u0002\u0002\u0098\u009d\u0005\u0006\u0004\u0002",
    "\u0099\u009a\u0007/\u0002\u0002\u009a\u009c\u00070\u0002\u0002\u009b",
    "\u0099\u0003\u0002\u0002\u0002\u009c\u009f\u0003\u0002\u0002\u0002\u009d",
    "\u009b\u0003\u0002\u0002\u0002\u009d\u009e\u0003\u0002\u0002\u0002\u009e",
    "\u00a0\u0003\u0002\u0002\u0002\u009f\u009d\u0003\u0002\u0002\u0002\u00a0",
    "\u00a1\u0007C\u0002\u0002\u00a1\u00a3\u0003\u0002\u0002\u0002\u00a2",
    "\u0096\u0003\u0002\u0002\u0002\u00a3\u00a6\u0003\u0002\u0002\u0002\u00a4",
    "\u00a2\u0003\u0002\u0002\u0002\u00a4\u00a5\u0003\u0002\u0002\u0002\u00a5",
    "\u0013\u0003\u0002\u0002\u0002\u00a6\u00a4\u0003\u0002\u0002\u0002\u00a7",
    "\u00a8\u0007+\u0002\u0002\u00a8\u00a9\u0005\u0010\t\u0002\u00a9\u00aa",
    "\u0007,\u0002\u0002\u00aa\u00ab\u0007\u0003\u0002\u0002\u00ab\u00ad",
    "\u0003\u0002\u0002\u0002\u00ac\u00a7\u0003\u0002\u0002\u0002\u00ac\u00ad",
    "\u0003\u0002\u0002\u0002\u00ad\u00ae\u0003\u0002\u0002\u0002\u00ae\u00af",
    "\u0007C\u0002\u0002\u00af\u00b2\u0007+\u0002\u0002\u00b0\u00b3\u0005",
    "\u0010\t\u0002\u00b1\u00b3\u0005\u0012\n\u0002\u00b2\u00b0\u0003\u0002",
    "\u0002\u0002\u00b2\u00b1\u0003\u0002\u0002\u0002\u00b2\u00b3\u0003\u0002",
    "\u0002\u0002\u00b3\u00b4\u0003\u0002\u0002\u0002\u00b4\u00b5\u0007,",
    "\u0002\u0002\u00b5\u00b6\u00071\u0002\u0002\u00b6\u0015\u0003\u0002",
    "\u0002\u0002\u00b7\u00b8\u0007C\u0002\u0002\u00b8\u00b9\u00071\u0002",
    "\u0002\u00b9\u0017\u0003\u0002\u0002\u0002\u00ba\u00bb\u0007\u000e\u0002",
    "\u0002\u00bb\u00bf\u0007-\u0002\u0002\u00bc\u00c0\u0005\u0014\u000b",
    "\u0002\u00bd\u00c0\u0005\u0016\f\u0002\u00be\u00c0\u0005\u000e\b\u0002",
    "\u00bf\u00bc\u0003\u0002\u0002\u0002\u00bf\u00bd\u0003\u0002\u0002\u0002",
    "\u00bf\u00be\u0003\u0002\u0002\u0002\u00c0\u00c1\u0003\u0002\u0002\u0002",
    "\u00c1\u00bf\u0003\u0002\u0002\u0002\u00c1\u00c2\u0003\u0002\u0002\u0002",
    "\u00c2\u00c3\u0003\u0002\u0002\u0002\u00c3\u00c4\u0007.\u0002\u0002",
    "\u00c4\u0019\u0003\u0002\u0002\u0002\u00c5\u00c7\u0005\u0018\r\u0002",
    "\u00c6\u00c5\u0003\u0002\u0002\u0002\u00c6\u00c7\u0003\u0002\u0002\u0002",
    "\u00c7\u001b\u0003\u0002\u0002\u0002\u00c8\u00c9\u0007\u0014\u0002\u0002",
    "\u00c9\u00ca\u0005,\u0017\u0002\u00ca\u00cd\u0005*\u0016\u0002\u00cb",
    "\u00cc\u0007\u0011\u0002\u0002\u00cc\u00ce\u0005*\u0016\u0002\u00cd",
    "\u00cb\u0003\u0002\u0002\u0002\u00cd\u00ce\u0003\u0002\u0002\u0002\u00ce",
    "\u00e1\u0003\u0002\u0002\u0002\u00cf\u00d0\u0007\u001f\u0002\u0002\u00d0",
    "\u00d1\u0005\n\u0006\u0002\u00d1\u00d8\u0007-\u0002\u0002\u00d2\u00d3",
    "\u0007\u000b\u0002\u0002\u00d3\u00d4\t\u0004\u0002\u0002\u00d4\u00d5",
    "\u00074\u0002\u0002\u00d5\u00d7\u0005*\u0016\u0002\u00d6\u00d2\u0003",
    "\u0002\u0002\u0002\u00d7\u00da\u0003\u0002\u0002\u0002\u00d8\u00d6\u0003",
    "\u0002\u0002\u0002\u00d8\u00d9\u0003\u0002\u0002\u0002\u00d9\u00db\u0003",
    "\u0002\u0002\u0002\u00da\u00d8\u0003\u0002\u0002\u0002\u00db\u00dc\u0007",
    "\u000f\u0002\u0002\u00dc\u00dd\u00074\u0002\u0002\u00dd\u00de\u0005",
    "*\u0016\u0002\u00de\u00df\u0007.\u0002\u0002\u00df\u00e1\u0003\u0002",
    "\u0002\u0002\u00e0\u00c8\u0003\u0002\u0002\u0002\u00e0\u00cf\u0003\u0002",
    "\u0002\u0002\u00e1\u001d\u0003\u0002\u0002\u0002\u00e2\u00e7\u0007\u0013",
    "\u0002\u0002\u00e3\u00e5\u0005\u0006\u0004\u0002\u00e4\u00e3\u0003\u0002",
    "\u0002\u0002\u00e4\u00e5\u0003\u0002\u0002\u0002\u00e5\u00e6\u0003\u0002",
    "\u0002\u0002\u00e6\u00e8\u0005:\u001e\u0002\u00e7\u00e4\u0003\u0002",
    "\u0002\u0002\u00e7\u00e8\u0003\u0002\u0002\u0002\u00e8\u00e9\u0003\u0002",
    "\u0002\u0002\u00e9\u00ea\u00071\u0002\u0002\u00ea\u00eb\u0005,\u0017",
    "\u0002\u00eb\u00ed\u00071\u0002\u0002\u00ec\u00ee\u0005:\u001e\u0002",
    "\u00ed\u00ec\u0003\u0002\u0002\u0002\u00ed\u00ee\u0003\u0002\u0002\u0002",
    "\u00ee\u00ef\u0003\u0002\u0002\u0002\u00ef\u00f0\u0005*\u0016\u0002",
    "\u00f0\u00f6\u0003\u0002\u0002\u0002\u00f1\u00f2\u0007\"\u0002\u0002",
    "\u00f2\u00f3\u0005,\u0017\u0002\u00f3\u00f4\u0005*\u0016\u0002\u00f4",
    "\u00f6\u0003\u0002\u0002\u0002\u00f5\u00e2\u0003\u0002\u0002\u0002\u00f5",
    "\u00f1\u0003\u0002\u0002\u0002\u00f6\u001f\u0003\u0002\u0002\u0002\u00f7",
    "\u00fa\u0007/\u0002\u0002\u00f8\u00fb\u0005,\u0017\u0002\u00f9\u00fb",
    "\u0005 \u0011\u0002\u00fa\u00f8\u0003\u0002\u0002\u0002\u00fa\u00f9",
    "\u0003\u0002\u0002\u0002\u00fb\u0103\u0003\u0002\u0002\u0002\u00fc\u00ff",
    "\u00072\u0002\u0002\u00fd\u0100\u0005,\u0017\u0002\u00fe\u0100\u0005",
    " \u0011\u0002\u00ff\u00fd\u0003\u0002\u0002\u0002\u00ff\u00fe\u0003",
    "\u0002\u0002\u0002\u0100\u0102\u0003\u0002\u0002\u0002\u0101\u00fc\u0003",
    "\u0002\u0002\u0002\u0102\u0105\u0003\u0002\u0002\u0002\u0103\u0101\u0003",
    "\u0002\u0002\u0002\u0103\u0104\u0003\u0002\u0002\u0002\u0104\u0106\u0003",
    "\u0002\u0002\u0002\u0105\u0103\u0003\u0002\u0002\u0002\u0106\u0107\u0007",
    "0\u0002\u0002\u0107!\u0003\u0002\u0002\u0002\u0108\u010e\u0005,\u0017",
    "\u0002\u0109\u010a\u0005,\u0017\u0002\u010a\u010b\u00072\u0002\u0002",
    "\u010b\u010c\u0005\"\u0012\u0002\u010c\u010e\u0003\u0002\u0002\u0002",
    "\u010d\u0108\u0003\u0002\u0002\u0002\u010d\u0109\u0003\u0002\u0002\u0002",
    "\u010e#\u0003\u0002\u0002\u0002\u010f\u0110\u0007C\u0002\u0002\u0110",
    "\u0112\u0007+\u0002\u0002\u0111\u0113\u0005\"\u0012\u0002\u0112\u0111",
    "\u0003\u0002\u0002\u0002\u0112\u0113\u0003\u0002\u0002\u0002\u0113\u0114",
    "\u0003\u0002\u0002\u0002\u0114\u0115\u0007,\u0002\u0002\u0115%\u0003",
    "\u0002\u0002\u0002\u0116\u0117\u0005\n\u0006\u0002\u0117\u0118\u0007",
    "3\u0002\u0002\u0118\u011a\u0003\u0002\u0002\u0002\u0119\u0116\u0003",
    "\u0002\u0002\u0002\u0119\u011a\u0003\u0002\u0002\u0002\u011a\u011b\u0003",
    "\u0002\u0002\u0002\u011b\u0127\u0005$\u0013\u0002\u011c\u011d\u0007",
    "\u001b\u0002\u0002\u011d\u011e\u0007+\u0002\u0002\u011e\u011f\u0005",
    "\n\u0006\u0002\u011f\u0120\u0007,\u0002\u0002\u0120\u0127\u0003\u0002",
    "\u0002\u0002\u0121\u0122\u0007#\u0002\u0002\u0122\u0123\u0007+\u0002",
    "\u0002\u0123\u0124\u0005\n\u0006\u0002\u0124\u0125\u0007,\u0002\u0002",
    "\u0125\u0127\u0003\u0002\u0002\u0002\u0126\u0119\u0003\u0002\u0002\u0002",
    "\u0126\u011c\u0003\u0002\u0002\u0002\u0126\u0121\u0003\u0002\u0002\u0002",
    "\u0127\'\u0003\u0002\u0002\u0002\u0128\u0129\u0005:\u001e\u0002\u0129",
    "\u012a\u00071\u0002\u0002\u012a\u0141\u0003\u0002\u0002\u0002\u012b",
    "\u012c\u0005&\u0014\u0002\u012c\u012d\u00071\u0002\u0002\u012d\u0141",
    "\u0003\u0002\u0002\u0002\u012e\u0141\u0005\u001c\u000f\u0002\u012f\u0141",
    "\u0005\u001e\u0010\u0002\u0130\u0131\u0007\u001c\u0002\u0002\u0131\u0141",
    "\u00071\u0002\u0002\u0132\u0133\u0007\n\u0002\u0002\u0133\u0141\u0007",
    "1\u0002\u0002\u0134\u0135\u0007\r\u0002\u0002\u0135\u0141\u00071\u0002",
    "\u0002\u0136\u013b\u0007\u0010\u0002\u0002\u0137\u0138\u0007/\u0002",
    "\u0002\u0138\u013a\u00070\u0002\u0002\u0139\u0137\u0003\u0002\u0002",
    "\u0002\u013a\u013d\u0003\u0002\u0002\u0002\u013b\u0139\u0003\u0002\u0002",
    "\u0002\u013b\u013c\u0003\u0002\u0002\u0002\u013c\u013e\u0003\u0002\u0002",
    "\u0002\u013d\u013b\u0003\u0002\u0002\u0002\u013e\u013f\u0007C\u0002",
    "\u0002\u013f\u0141\u00071\u0002\u0002\u0140\u0128\u0003\u0002\u0002",
    "\u0002\u0140\u012b\u0003\u0002\u0002\u0002\u0140\u012e\u0003\u0002\u0002",
    "\u0002\u0140\u012f\u0003\u0002\u0002\u0002\u0140\u0130\u0003\u0002\u0002",
    "\u0002\u0140\u0132\u0003\u0002\u0002\u0002\u0140\u0134\u0003\u0002\u0002",
    "\u0002\u0140\u0136\u0003\u0002\u0002\u0002\u0141)\u0003\u0002\u0002",
    "\u0002\u0142\u0147\u0007-\u0002\u0002\u0143\u0146\u0005\u000e\b\u0002",
    "\u0144\u0146\u0005(\u0015\u0002\u0145\u0143\u0003\u0002\u0002\u0002",
    "\u0145\u0144\u0003\u0002\u0002\u0002\u0146\u0149\u0003\u0002\u0002\u0002",
    "\u0147\u0145\u0003\u0002\u0002\u0002\u0147\u0148\u0003\u0002\u0002\u0002",
    "\u0148\u014a\u0003\u0002\u0002\u0002\u0149\u0147\u0003\u0002\u0002\u0002",
    "\u014a\u014b\u0007.\u0002\u0002\u014b+\u0003\u0002\u0002\u0002\u014c",
    "\u014d\b\u0017\u0001\u0002\u014d\u014e\u0005<\u001f\u0002\u014e\u014f",
    "\u0005,\u0017\r\u014f\u015f\u0003\u0002\u0002\u0002\u0150\u0151\u0007",
    "+\u0002\u0002\u0151\u0152\u0005,\u0017\u0002\u0152\u0153\u0007,\u0002",
    "\u0002\u0153\u015d\u0003\u0002\u0002\u0002\u0154\u015d\u0007C\u0002",
    "\u0002\u0155\u015d\u0005\u0004\u0003\u0002\u0156\u0157\u0007\b\u0002",
    "\u0002\u0157\u015d\u0005$\u0013\u0002\u0158\u015d\u0005&\u0014\u0002",
    "\u0159\u015d\u0005\n\u0006\u0002\u015a\u015d\u0005 \u0011\u0002\u015b",
    "\u015d\u0007\u0016\u0002\u0002\u015c\u0150\u0003\u0002\u0002\u0002\u015c",
    "\u0154\u0003\u0002\u0002\u0002\u015c\u0155\u0003\u0002\u0002\u0002\u015c",
    "\u0156\u0003\u0002\u0002\u0002\u015c\u0158\u0003\u0002\u0002\u0002\u015c",
    "\u0159\u0003\u0002\u0002\u0002\u015c\u015a\u0003\u0002\u0002\u0002\u015c",
    "\u015b\u0003\u0002\u0002\u0002\u015d\u015f\u0003\u0002\u0002\u0002\u015e",
    "\u014c\u0003\u0002\u0002\u0002\u015e\u015c\u0003\u0002\u0002\u0002\u015f",
    "\u017d\u0003\u0002\u0002\u0002\u0160\u0161\f\f\u0002\u0002\u0161\u0162",
    "\t\u0005\u0002\u0002\u0162\u017c\u0005,\u0017\r\u0163\u0164\f\u000b",
    "\u0002\u0002\u0164\u0165\t\u0006\u0002\u0002\u0165\u017c\u0005,\u0017",
    "\f\u0166\u0167\f\n\u0002\u0002\u0167\u0168\t\u0007\u0002\u0002\u0168",
    "\u017c\u0005,\u0017\u000b\u0169\u016a\f\t\u0002\u0002\u016a\u016b\t",
    "\b\u0002\u0002\u016b\u017c\u0005,\u0017\n\u016c\u016d\f\b\u0002\u0002",
    "\u016d\u016e\u0007?\u0002\u0002\u016e\u017c\u0005,\u0017\t\u016f\u0170",
    "\f\u0007\u0002\u0002\u0170\u0171\u0007A\u0002\u0002\u0171\u017c\u0005",
    ",\u0017\b\u0172\u0173\f\u0006\u0002\u0002\u0173\u0174\u0007@\u0002\u0002",
    "\u0174\u017c\u0005,\u0017\u0007\u0175\u0176\f\u0005\u0002\u0002\u0176",
    "\u0177\u00079\u0002\u0002\u0177\u017c\u0005,\u0017\u0006\u0178\u0179",
    "\f\u0004\u0002\u0002\u0179\u017a\u0007:\u0002\u0002\u017a\u017c\u0005",
    ",\u0017\u0005\u017b\u0160\u0003\u0002\u0002\u0002\u017b\u0163\u0003",
    "\u0002\u0002\u0002\u017b\u0166\u0003\u0002\u0002\u0002\u017b\u0169\u0003",
    "\u0002\u0002\u0002\u017b\u016c\u0003\u0002\u0002\u0002\u017b\u016f\u0003",
    "\u0002\u0002\u0002\u017b\u0172\u0003\u0002\u0002\u0002\u017b\u0175\u0003",
    "\u0002\u0002\u0002\u017b\u0178\u0003\u0002\u0002\u0002\u017c\u017f\u0003",
    "\u0002\u0002\u0002\u017d\u017b\u0003\u0002\u0002\u0002\u017d\u017e\u0003",
    "\u0002\u0002\u0002\u017e-\u0003\u0002\u0002\u0002\u017f\u017d\u0003",
    "\u0002\u0002\u0002\u0180\u0181\u0007+\u0002\u0002\u0181\u0182\u0005",
    "\u0012\n\u0002\u0182\u0183\u0007,\u0002\u0002\u0183\u0184\u0007\u0003",
    "\u0002\u0002\u0184\u0186\u0003\u0002\u0002\u0002\u0185\u0180\u0003\u0002",
    "\u0002\u0002\u0185\u0186\u0003\u0002\u0002\u0002\u0186\u0187\u0003\u0002",
    "\u0002\u0002\u0187\u0188\u0007$\u0002\u0002\u0188\u0189\u0007C\u0002",
    "\u0002\u0189\u018b\u0007+\u0002\u0002\u018a\u018c\u0005\u0012\n\u0002",
    "\u018b\u018a\u0003\u0002\u0002\u0002\u018b\u018c\u0003\u0002\u0002\u0002",
    "\u018c\u018d\u0003\u0002\u0002\u0002\u018d\u018e\u0007,\u0002\u0002",
    "\u018e\u018f\u0005*\u0016\u0002\u018f/\u0003\u0002\u0002\u0002\u0190",
    "\u0191\t\t\u0002\u0002\u01911\u0003\u0002\u0002\u0002\u0192\u0194\u0005",
    "0\u0019\u0002\u0193\u0192\u0003\u0002\u0002\u0002\u0193\u0194\u0003",
    "\u0002\u0002\u0002\u0194\u0197\u0003\u0002\u0002\u0002\u0195\u0198\u0005",
    "\u000e\b\u0002\u0196\u0198\u0005.\u0018\u0002\u0197\u0195\u0003\u0002",
    "\u0002\u0002\u0197\u0196\u0003\u0002\u0002\u0002\u01983\u0003\u0002",
    "\u0002\u0002\u0199\u019a\u0007!\u0002\u0002\u019a\u019d\u0007C\u0002",
    "\u0002\u019b\u019c\u00074\u0002\u0002\u019c\u019e\u0007C\u0002\u0002",
    "\u019d\u019b\u0003\u0002\u0002\u0002\u019d\u019e\u0003\u0002\u0002\u0002",
    "\u019e\u019f\u0003\u0002\u0002\u0002\u019f\u01a1\u0007-\u0002\u0002",
    "\u01a0\u01a2\u00052\u001a\u0002\u01a1\u01a0\u0003\u0002\u0002\u0002",
    "\u01a2\u01a3\u0003\u0002\u0002\u0002\u01a3\u01a1\u0003\u0002\u0002\u0002",
    "\u01a3\u01a4\u0003\u0002\u0002\u0002\u01a4\u01a5\u0003\u0002\u0002\u0002",
    "\u01a5\u01a6\u0007.\u0002\u0002\u01a65\u0003\u0002\u0002\u0002\u01a7",
    "\u01aa\u00054\u001b\u0002\u01a8\u01aa\u0005.\u0018\u0002\u01a9\u01a7",
    "\u0003\u0002\u0002\u0002\u01a9\u01a8\u0003\u0002\u0002\u0002\u01aa7",
    "\u0003\u0002\u0002\u0002\u01ab\u01ad\u00056\u001c\u0002\u01ac\u01ab",
    "\u0003\u0002\u0002\u0002\u01ad\u01ae\u0003\u0002\u0002\u0002\u01ae\u01ac",
    "\u0003\u0002\u0002\u0002\u01ae\u01af\u0003\u0002\u0002\u0002\u01af9",
    "\u0003\u0002\u0002\u0002\u01b0\u01bd\u0005\n\u0006\u0002\u01b1\u01b2",
    "\u0007+\u0002\u0002\u01b2\u01b7\u0005\n\u0006\u0002\u01b3\u01b4\u0007",
    "2\u0002\u0002\u01b4\u01b6\u0005\n\u0006\u0002\u01b5\u01b3\u0003\u0002",
    "\u0002\u0002\u01b6\u01b9\u0003\u0002\u0002\u0002\u01b7\u01b5\u0003\u0002",
    "\u0002\u0002\u01b7\u01b8\u0003\u0002\u0002\u0002\u01b8\u01ba\u0003\u0002",
    "\u0002\u0002\u01b9\u01b7\u0003\u0002\u0002\u0002\u01ba\u01bb\u0007,",
    "\u0002\u0002\u01bb\u01bd\u0003\u0002\u0002\u0002\u01bc\u01b0\u0003\u0002",
    "\u0002\u0002\u01bc\u01b1\u0003\u0002\u0002\u0002\u01bd\u01be\u0003\u0002",
    "\u0002\u0002\u01be\u01bf\u0007\u0003\u0002\u0002\u01bf\u01c0\u0005,",
    "\u0017\u0002\u01c0;\u0003\u0002\u0002\u0002\u01c1\u01c2\t\n\u0002\u0002",
    "\u01c2=\u0003\u0002\u0002\u00024FQV]cfny\u0083\u0088\u0091\u009d\u00a4",
    "\u00ac\u00b2\u00bf\u00c1\u00c6\u00cd\u00d8\u00e0\u00e4\u00e7\u00ed\u00f5",
    "\u00fa\u00ff\u0103\u010d\u0112\u0119\u0126\u013b\u0140\u0145\u0147\u015c",
    "\u015e\u017b\u017d\u0185\u018b\u0193\u0197\u019d\u01a3\u01a9\u01ae\u01b7",
    "\u01bc"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'='", "'>'", "'<'", "'!'", "'~'", "'allocate'", 
                     "'bool'", "'break'", "'case'", "'const'", "'continue'", 
                     "'declare'", "'default'", "'destruct'", "'else'", "'float'", 
                     "'for'", "'if'", "'int'", "'nil'", "'of'", "'private'", 
                     "'protected'", "'public'", "'read'", "'return'", "'string'", 
                     "'super'", "'switch'", "'this'", "'type'", "'while'", 
                     "'write'", "'function'", null, null, null, null, null, 
                     null, "'('", "')'", "'{'", "'}'", "'['", "']'", "';'", 
                     "','", "'.'", "':'", "'=='", "'<='", "'>='", "'!='", 
                     "'&&'", "'||'", "'+'", "'-'", "'*'", "'/'", "'&'", 
                     "'|'", "'^'", "'%'" ];

var symbolicNames = [ null, "ASSIGN", "GT", "LT", "BANG", "TILDE", "ALLOCATE", 
                      "BOOL", "BREAK", "CASE", "CONST", "CONTINUE", "DECLARE", 
                      "DEFAULT", "DESTRUCT", "ELSE", "FLOAT", "FOR", "IF", 
                      "INT", "NIL", "OF", "PRIVATE", "PROTECTED", "PUBLIC", 
                      "READ", "RETURN", "STRING", "SUPER", "SWITCH", "THIS", 
                      "TYPE", "WHILE", "WRITE", "FUNCTION", "REAL_CONST", 
                      "HEX_CONST", "HEX_STR", "INT_CONST", "BOOL_CONST", 
                      "STRING_CONST", "LPAREN", "RPAREN", "LBRACE", "RBRACE", 
                      "LBRACK", "RBRACK", "SEMI", "COMMA", "DOT", "COLON", 
                      "EQUAL", "LE", "GE", "NOTEQUAL", "AND", "OR", "ADD", 
                      "SUB", "MUL", "DIV", "BITAND", "BITOR", "CARET", "MOD", 
                      "ID", "WHITESPACE", "NEWLINE", "BLOCKCOMMENT", "LINECOMMENT" ];

var ruleNames =  [ "program", "const_val", "type", "ref", "variable", "variable_val", 
                   "variable_def", "args", "args_variable", "func_dcl", 
                   "type_dcl", "ft_dcl", "dcl", "cond_stmt", "loop_stmt", 
                   "list", "params", "handle_call", "func_call", "stmt", 
                   "block", "expr", "fun_def", "access_modifier", "component", 
                   "type_def", "ft_def", "def", "assign", "unary_op" ];

function lilu_grammarParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

lilu_grammarParser.prototype = Object.create(antlr4.Parser.prototype);
lilu_grammarParser.prototype.constructor = lilu_grammarParser;

Object.defineProperty(lilu_grammarParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

lilu_grammarParser.EOF = antlr4.Token.EOF;
lilu_grammarParser.ASSIGN = 1;
lilu_grammarParser.GT = 2;
lilu_grammarParser.LT = 3;
lilu_grammarParser.BANG = 4;
lilu_grammarParser.TILDE = 5;
lilu_grammarParser.ALLOCATE = 6;
lilu_grammarParser.BOOL = 7;
lilu_grammarParser.BREAK = 8;
lilu_grammarParser.CASE = 9;
lilu_grammarParser.CONST = 10;
lilu_grammarParser.CONTINUE = 11;
lilu_grammarParser.DECLARE = 12;
lilu_grammarParser.DEFAULT = 13;
lilu_grammarParser.DESTRUCT = 14;
lilu_grammarParser.ELSE = 15;
lilu_grammarParser.FLOAT = 16;
lilu_grammarParser.FOR = 17;
lilu_grammarParser.IF = 18;
lilu_grammarParser.INT = 19;
lilu_grammarParser.NIL = 20;
lilu_grammarParser.OF = 21;
lilu_grammarParser.PRIVATE = 22;
lilu_grammarParser.PROTECTED = 23;
lilu_grammarParser.PUBLIC = 24;
lilu_grammarParser.READ = 25;
lilu_grammarParser.RETURN = 26;
lilu_grammarParser.STRING = 27;
lilu_grammarParser.SUPER = 28;
lilu_grammarParser.SWITCH = 29;
lilu_grammarParser.THIS = 30;
lilu_grammarParser.TYPE = 31;
lilu_grammarParser.WHILE = 32;
lilu_grammarParser.WRITE = 33;
lilu_grammarParser.FUNCTION = 34;
lilu_grammarParser.REAL_CONST = 35;
lilu_grammarParser.HEX_CONST = 36;
lilu_grammarParser.HEX_STR = 37;
lilu_grammarParser.INT_CONST = 38;
lilu_grammarParser.BOOL_CONST = 39;
lilu_grammarParser.STRING_CONST = 40;
lilu_grammarParser.LPAREN = 41;
lilu_grammarParser.RPAREN = 42;
lilu_grammarParser.LBRACE = 43;
lilu_grammarParser.RBRACE = 44;
lilu_grammarParser.LBRACK = 45;
lilu_grammarParser.RBRACK = 46;
lilu_grammarParser.SEMI = 47;
lilu_grammarParser.COMMA = 48;
lilu_grammarParser.DOT = 49;
lilu_grammarParser.COLON = 50;
lilu_grammarParser.EQUAL = 51;
lilu_grammarParser.LE = 52;
lilu_grammarParser.GE = 53;
lilu_grammarParser.NOTEQUAL = 54;
lilu_grammarParser.AND = 55;
lilu_grammarParser.OR = 56;
lilu_grammarParser.ADD = 57;
lilu_grammarParser.SUB = 58;
lilu_grammarParser.MUL = 59;
lilu_grammarParser.DIV = 60;
lilu_grammarParser.BITAND = 61;
lilu_grammarParser.BITOR = 62;
lilu_grammarParser.CARET = 63;
lilu_grammarParser.MOD = 64;
lilu_grammarParser.ID = 65;
lilu_grammarParser.WHITESPACE = 66;
lilu_grammarParser.NEWLINE = 67;
lilu_grammarParser.BLOCKCOMMENT = 68;
lilu_grammarParser.LINECOMMENT = 69;

lilu_grammarParser.RULE_program = 0;
lilu_grammarParser.RULE_const_val = 1;
lilu_grammarParser.RULE_type = 2;
lilu_grammarParser.RULE_ref = 3;
lilu_grammarParser.RULE_variable = 4;
lilu_grammarParser.RULE_variable_val = 5;
lilu_grammarParser.RULE_variable_def = 6;
lilu_grammarParser.RULE_args = 7;
lilu_grammarParser.RULE_args_variable = 8;
lilu_grammarParser.RULE_func_dcl = 9;
lilu_grammarParser.RULE_type_dcl = 10;
lilu_grammarParser.RULE_ft_dcl = 11;
lilu_grammarParser.RULE_dcl = 12;
lilu_grammarParser.RULE_cond_stmt = 13;
lilu_grammarParser.RULE_loop_stmt = 14;
lilu_grammarParser.RULE_list = 15;
lilu_grammarParser.RULE_params = 16;
lilu_grammarParser.RULE_handle_call = 17;
lilu_grammarParser.RULE_func_call = 18;
lilu_grammarParser.RULE_stmt = 19;
lilu_grammarParser.RULE_block = 20;
lilu_grammarParser.RULE_expr = 21;
lilu_grammarParser.RULE_fun_def = 22;
lilu_grammarParser.RULE_access_modifier = 23;
lilu_grammarParser.RULE_component = 24;
lilu_grammarParser.RULE_type_def = 25;
lilu_grammarParser.RULE_ft_def = 26;
lilu_grammarParser.RULE_def = 27;
lilu_grammarParser.RULE_assign = 28;
lilu_grammarParser.RULE_unary_op = 29;

function ProgramContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = lilu_grammarParser.RULE_program;
    return this;
}

ProgramContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgramContext.prototype.constructor = ProgramContext;

ProgramContext.prototype.dcl = function() {
    return this.getTypedRuleContext(DclContext,0);
};

ProgramContext.prototype.def = function() {
    return this.getTypedRuleContext(DefContext,0);
};

ProgramContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterProgram(this);
	}
};

ProgramContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitProgram(this);
	}
};

ProgramContext.prototype.accept = function(visitor) {
    if ( visitor instanceof lilu_grammarVisitor ) {
        return visitor.visitProgram(this);
    } else {
        return visitor.visitChildren(this);
    }
};




lilu_grammarParser.ProgramContext = ProgramContext;

lilu_grammarParser.prototype.program = function() {

    var localctx = new ProgramContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, lilu_grammarParser.RULE_program);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 60;
        this.dcl();
        this.state = 61;
        this.def();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Const_valContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = lilu_grammarParser.RULE_const_val;
    return this;
}

Const_valContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Const_valContext.prototype.constructor = Const_valContext;


 
Const_valContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function Const_valHEXContext(parser, ctx) {
	Const_valContext.call(this, parser);
    Const_valContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Const_valHEXContext.prototype = Object.create(Const_valContext.prototype);
Const_valHEXContext.prototype.constructor = Const_valHEXContext;

lilu_grammarParser.Const_valHEXContext = Const_valHEXContext;

Const_valHEXContext.prototype.HEX_CONST = function() {
    return this.getToken(lilu_grammarParser.HEX_CONST, 0);
};
Const_valHEXContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterConst_valHEX(this);
	}
};

Const_valHEXContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitConst_valHEX(this);
	}
};

Const_valHEXContext.prototype.accept = function(visitor) {
    if ( visitor instanceof lilu_grammarVisitor ) {
        return visitor.visitConst_valHEX(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function Const_valSTRINGContext(parser, ctx) {
	Const_valContext.call(this, parser);
    Const_valContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Const_valSTRINGContext.prototype = Object.create(Const_valContext.prototype);
Const_valSTRINGContext.prototype.constructor = Const_valSTRINGContext;

lilu_grammarParser.Const_valSTRINGContext = Const_valSTRINGContext;

Const_valSTRINGContext.prototype.STRING_CONST = function() {
    return this.getToken(lilu_grammarParser.STRING_CONST, 0);
};
Const_valSTRINGContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterConst_valSTRING(this);
	}
};

Const_valSTRINGContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitConst_valSTRING(this);
	}
};

Const_valSTRINGContext.prototype.accept = function(visitor) {
    if ( visitor instanceof lilu_grammarVisitor ) {
        return visitor.visitConst_valSTRING(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function Const_valBOOLContext(parser, ctx) {
	Const_valContext.call(this, parser);
    Const_valContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Const_valBOOLContext.prototype = Object.create(Const_valContext.prototype);
Const_valBOOLContext.prototype.constructor = Const_valBOOLContext;

lilu_grammarParser.Const_valBOOLContext = Const_valBOOLContext;

Const_valBOOLContext.prototype.BOOL_CONST = function() {
    return this.getToken(lilu_grammarParser.BOOL_CONST, 0);
};
Const_valBOOLContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterConst_valBOOL(this);
	}
};

Const_valBOOLContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitConst_valBOOL(this);
	}
};

Const_valBOOLContext.prototype.accept = function(visitor) {
    if ( visitor instanceof lilu_grammarVisitor ) {
        return visitor.visitConst_valBOOL(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function Const_valREALContext(parser, ctx) {
	Const_valContext.call(this, parser);
    Const_valContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Const_valREALContext.prototype = Object.create(Const_valContext.prototype);
Const_valREALContext.prototype.constructor = Const_valREALContext;

lilu_grammarParser.Const_valREALContext = Const_valREALContext;

Const_valREALContext.prototype.REAL_CONST = function() {
    return this.getToken(lilu_grammarParser.REAL_CONST, 0);
};
Const_valREALContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterConst_valREAL(this);
	}
};

Const_valREALContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitConst_valREAL(this);
	}
};

Const_valREALContext.prototype.accept = function(visitor) {
    if ( visitor instanceof lilu_grammarVisitor ) {
        return visitor.visitConst_valREAL(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function Const_valINTContext(parser, ctx) {
	Const_valContext.call(this, parser);
    Const_valContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Const_valINTContext.prototype = Object.create(Const_valContext.prototype);
Const_valINTContext.prototype.constructor = Const_valINTContext;

lilu_grammarParser.Const_valINTContext = Const_valINTContext;

Const_valINTContext.prototype.INT_CONST = function() {
    return this.getToken(lilu_grammarParser.INT_CONST, 0);
};
Const_valINTContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterConst_valINT(this);
	}
};

Const_valINTContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitConst_valINT(this);
	}
};

Const_valINTContext.prototype.accept = function(visitor) {
    if ( visitor instanceof lilu_grammarVisitor ) {
        return visitor.visitConst_valINT(this);
    } else {
        return visitor.visitChildren(this);
    }
};



lilu_grammarParser.Const_valContext = Const_valContext;

lilu_grammarParser.prototype.const_val = function() {

    var localctx = new Const_valContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, lilu_grammarParser.RULE_const_val);
    try {
        this.state = 68;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case lilu_grammarParser.INT_CONST:
            localctx = new Const_valINTContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 63;
            this.match(lilu_grammarParser.INT_CONST);
            break;
        case lilu_grammarParser.HEX_CONST:
            localctx = new Const_valHEXContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 64;
            this.match(lilu_grammarParser.HEX_CONST);
            break;
        case lilu_grammarParser.REAL_CONST:
            localctx = new Const_valREALContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 65;
            this.match(lilu_grammarParser.REAL_CONST);
            break;
        case lilu_grammarParser.BOOL_CONST:
            localctx = new Const_valBOOLContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 66;
            this.match(lilu_grammarParser.BOOL_CONST);
            break;
        case lilu_grammarParser.STRING_CONST:
            localctx = new Const_valSTRINGContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 67;
            this.match(lilu_grammarParser.STRING_CONST);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = lilu_grammarParser.RULE_type;
    return this;
}

TypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TypeContext.prototype.constructor = TypeContext;

TypeContext.prototype.INT = function() {
    return this.getToken(lilu_grammarParser.INT, 0);
};

TypeContext.prototype.BOOL = function() {
    return this.getToken(lilu_grammarParser.BOOL, 0);
};

TypeContext.prototype.FLOAT = function() {
    return this.getToken(lilu_grammarParser.FLOAT, 0);
};

TypeContext.prototype.STRING = function() {
    return this.getToken(lilu_grammarParser.STRING, 0);
};

TypeContext.prototype.ID = function() {
    return this.getToken(lilu_grammarParser.ID, 0);
};

TypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterType(this);
	}
};

TypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitType(this);
	}
};

TypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof lilu_grammarVisitor ) {
        return visitor.visitType(this);
    } else {
        return visitor.visitChildren(this);
    }
};




lilu_grammarParser.TypeContext = TypeContext;

lilu_grammarParser.prototype.type = function() {

    var localctx = new TypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, lilu_grammarParser.RULE_type);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 70;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << lilu_grammarParser.BOOL) | (1 << lilu_grammarParser.FLOAT) | (1 << lilu_grammarParser.INT) | (1 << lilu_grammarParser.STRING))) !== 0) || _la===lilu_grammarParser.ID)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function RefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = lilu_grammarParser.RULE_ref;
    return this;
}

RefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RefContext.prototype.constructor = RefContext;

RefContext.prototype.ID = function() {
    return this.getToken(lilu_grammarParser.ID, 0);
};

RefContext.prototype.LBRACK = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(lilu_grammarParser.LBRACK);
    } else {
        return this.getToken(lilu_grammarParser.LBRACK, i);
    }
};


RefContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

RefContext.prototype.RBRACK = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(lilu_grammarParser.RBRACK);
    } else {
        return this.getToken(lilu_grammarParser.RBRACK, i);
    }
};


RefContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterRef(this);
	}
};

RefContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitRef(this);
	}
};

RefContext.prototype.accept = function(visitor) {
    if ( visitor instanceof lilu_grammarVisitor ) {
        return visitor.visitRef(this);
    } else {
        return visitor.visitChildren(this);
    }
};




lilu_grammarParser.RefContext = RefContext;

lilu_grammarParser.prototype.ref = function() {

    var localctx = new RefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, lilu_grammarParser.RULE_ref);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 72;
        this.match(lilu_grammarParser.ID);
        this.state = 79;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,1,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 73;
                this.match(lilu_grammarParser.LBRACK);
                this.state = 74;
                this.expr(0);
                this.state = 75;
                this.match(lilu_grammarParser.RBRACK); 
            }
            this.state = 81;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,1,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function VariableContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = lilu_grammarParser.RULE_variable;
    return this;
}

VariableContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VariableContext.prototype.constructor = VariableContext;

VariableContext.prototype.ref = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(RefContext);
    } else {
        return this.getTypedRuleContext(RefContext,i);
    }
};

VariableContext.prototype.DOT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(lilu_grammarParser.DOT);
    } else {
        return this.getToken(lilu_grammarParser.DOT, i);
    }
};


VariableContext.prototype.THIS = function() {
    return this.getToken(lilu_grammarParser.THIS, 0);
};

VariableContext.prototype.SUPER = function() {
    return this.getToken(lilu_grammarParser.SUPER, 0);
};

VariableContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterVariable(this);
	}
};

VariableContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitVariable(this);
	}
};

VariableContext.prototype.accept = function(visitor) {
    if ( visitor instanceof lilu_grammarVisitor ) {
        return visitor.visitVariable(this);
    } else {
        return visitor.visitChildren(this);
    }
};




lilu_grammarParser.VariableContext = VariableContext;

lilu_grammarParser.prototype.variable = function() {

    var localctx = new VariableContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, lilu_grammarParser.RULE_variable);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 84;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===lilu_grammarParser.SUPER || _la===lilu_grammarParser.THIS) {
            this.state = 82;
            _la = this._input.LA(1);
            if(!(_la===lilu_grammarParser.SUPER || _la===lilu_grammarParser.THIS)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 83;
            this.match(lilu_grammarParser.DOT);
        }

        this.state = 86;
        this.ref();
        this.state = 91;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 87;
                this.match(lilu_grammarParser.DOT);
                this.state = 88;
                this.ref(); 
            }
            this.state = 93;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Variable_valContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = lilu_grammarParser.RULE_variable_val;
    return this;
}

Variable_valContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Variable_valContext.prototype.constructor = Variable_valContext;

Variable_valContext.prototype.ref = function() {
    return this.getTypedRuleContext(RefContext,0);
};

Variable_valContext.prototype.ASSIGN = function() {
    return this.getToken(lilu_grammarParser.ASSIGN, 0);
};

Variable_valContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

Variable_valContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterVariable_val(this);
	}
};

Variable_valContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitVariable_val(this);
	}
};

Variable_valContext.prototype.accept = function(visitor) {
    if ( visitor instanceof lilu_grammarVisitor ) {
        return visitor.visitVariable_val(this);
    } else {
        return visitor.visitChildren(this);
    }
};




lilu_grammarParser.Variable_valContext = Variable_valContext;

lilu_grammarParser.prototype.variable_val = function() {

    var localctx = new Variable_valContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, lilu_grammarParser.RULE_variable_val);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 94;
        this.ref();
        this.state = 97;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===lilu_grammarParser.ASSIGN) {
            this.state = 95;
            this.match(lilu_grammarParser.ASSIGN);
            this.state = 96;
            this.expr(0);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Variable_defContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = lilu_grammarParser.RULE_variable_def;
    return this;
}

Variable_defContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Variable_defContext.prototype.constructor = Variable_defContext;

Variable_defContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};

Variable_defContext.prototype.variable_val = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Variable_valContext);
    } else {
        return this.getTypedRuleContext(Variable_valContext,i);
    }
};

Variable_defContext.prototype.SEMI = function() {
    return this.getToken(lilu_grammarParser.SEMI, 0);
};

Variable_defContext.prototype.CONST = function() {
    return this.getToken(lilu_grammarParser.CONST, 0);
};

Variable_defContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(lilu_grammarParser.COMMA);
    } else {
        return this.getToken(lilu_grammarParser.COMMA, i);
    }
};


Variable_defContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterVariable_def(this);
	}
};

Variable_defContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitVariable_def(this);
	}
};

Variable_defContext.prototype.accept = function(visitor) {
    if ( visitor instanceof lilu_grammarVisitor ) {
        return visitor.visitVariable_def(this);
    } else {
        return visitor.visitChildren(this);
    }
};




lilu_grammarParser.Variable_defContext = Variable_defContext;

lilu_grammarParser.prototype.variable_def = function() {

    var localctx = new Variable_defContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, lilu_grammarParser.RULE_variable_def);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 100;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===lilu_grammarParser.CONST) {
            this.state = 99;
            this.match(lilu_grammarParser.CONST);
        }

        this.state = 102;
        this.type();
        this.state = 103;
        this.variable_val();
        this.state = 108;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===lilu_grammarParser.COMMA) {
            this.state = 104;
            this.match(lilu_grammarParser.COMMA);
            this.state = 105;
            this.variable_val();
            this.state = 110;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 111;
        this.match(lilu_grammarParser.SEMI);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ArgsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = lilu_grammarParser.RULE_args;
    return this;
}

ArgsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArgsContext.prototype.constructor = ArgsContext;


 
ArgsContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function ArgsArgsContext(parser, ctx) {
	ArgsContext.call(this, parser);
    ArgsContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ArgsArgsContext.prototype = Object.create(ArgsContext.prototype);
ArgsArgsContext.prototype.constructor = ArgsArgsContext;

lilu_grammarParser.ArgsArgsContext = ArgsArgsContext;

ArgsArgsContext.prototype.args = function() {
    return this.getTypedRuleContext(ArgsContext,0);
};

ArgsArgsContext.prototype.COMMA = function() {
    return this.getToken(lilu_grammarParser.COMMA, 0);
};

ArgsArgsContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};

ArgsArgsContext.prototype.LBRACK = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(lilu_grammarParser.LBRACK);
    } else {
        return this.getToken(lilu_grammarParser.LBRACK, i);
    }
};


ArgsArgsContext.prototype.RBRACK = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(lilu_grammarParser.RBRACK);
    } else {
        return this.getToken(lilu_grammarParser.RBRACK, i);
    }
};

ArgsArgsContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterArgsArgs(this);
	}
};

ArgsArgsContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitArgsArgs(this);
	}
};

ArgsArgsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof lilu_grammarVisitor ) {
        return visitor.visitArgsArgs(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ArgsTypeContext(parser, ctx) {
	ArgsContext.call(this, parser);
    ArgsContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ArgsTypeContext.prototype = Object.create(ArgsContext.prototype);
ArgsTypeContext.prototype.constructor = ArgsTypeContext;

lilu_grammarParser.ArgsTypeContext = ArgsTypeContext;

ArgsTypeContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};

ArgsTypeContext.prototype.LBRACK = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(lilu_grammarParser.LBRACK);
    } else {
        return this.getToken(lilu_grammarParser.LBRACK, i);
    }
};


ArgsTypeContext.prototype.RBRACK = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(lilu_grammarParser.RBRACK);
    } else {
        return this.getToken(lilu_grammarParser.RBRACK, i);
    }
};

ArgsTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterArgsType(this);
	}
};

ArgsTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitArgsType(this);
	}
};

ArgsTypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof lilu_grammarVisitor ) {
        return visitor.visitArgsType(this);
    } else {
        return visitor.visitChildren(this);
    }
};



lilu_grammarParser.prototype.args = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ArgsContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 14;
    this.enterRecursionRule(localctx, 14, lilu_grammarParser.RULE_args, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        localctx = new ArgsTypeContext(this, localctx);
        this._ctx = localctx;
        _prevctx = localctx;

        this.state = 114;
        this.type();
        this.state = 119;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 115;
                this.match(lilu_grammarParser.LBRACK);
                this.state = 116;
                this.match(lilu_grammarParser.RBRACK); 
            }
            this.state = 121;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,7,this._ctx);
        }

        this._ctx.stop = this._input.LT(-1);
        this.state = 134;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,9,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new ArgsArgsContext(this, new ArgsContext(this, _parentctx, _parentState));
                this.pushNewRecursionContext(localctx, _startState, lilu_grammarParser.RULE_args);
                this.state = 122;
                if (!( this.precpred(this._ctx, 1))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                }
                this.state = 123;
                this.match(lilu_grammarParser.COMMA);
                this.state = 124;
                this.type();
                this.state = 129;
                this._errHandler.sync(this);
                var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
                while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                    if(_alt===1) {
                        this.state = 125;
                        this.match(lilu_grammarParser.LBRACK);
                        this.state = 126;
                        this.match(lilu_grammarParser.RBRACK); 
                    }
                    this.state = 131;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input,8,this._ctx);
                }
         
            }
            this.state = 136;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,9,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function Args_variableContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = lilu_grammarParser.RULE_args_variable;
    return this;
}

Args_variableContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Args_variableContext.prototype.constructor = Args_variableContext;


 
Args_variableContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function Args_variableTypeContext(parser, ctx) {
	Args_variableContext.call(this, parser);
    Args_variableContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Args_variableTypeContext.prototype = Object.create(Args_variableContext.prototype);
Args_variableTypeContext.prototype.constructor = Args_variableTypeContext;

lilu_grammarParser.Args_variableTypeContext = Args_variableTypeContext;

Args_variableTypeContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};

Args_variableTypeContext.prototype.ID = function() {
    return this.getToken(lilu_grammarParser.ID, 0);
};

Args_variableTypeContext.prototype.LBRACK = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(lilu_grammarParser.LBRACK);
    } else {
        return this.getToken(lilu_grammarParser.LBRACK, i);
    }
};


Args_variableTypeContext.prototype.RBRACK = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(lilu_grammarParser.RBRACK);
    } else {
        return this.getToken(lilu_grammarParser.RBRACK, i);
    }
};

Args_variableTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterArgs_variableType(this);
	}
};

Args_variableTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitArgs_variableType(this);
	}
};

Args_variableTypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof lilu_grammarVisitor ) {
        return visitor.visitArgs_variableType(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function Args_variableArgs_variableContext(parser, ctx) {
	Args_variableContext.call(this, parser);
    Args_variableContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Args_variableArgs_variableContext.prototype = Object.create(Args_variableContext.prototype);
Args_variableArgs_variableContext.prototype.constructor = Args_variableArgs_variableContext;

lilu_grammarParser.Args_variableArgs_variableContext = Args_variableArgs_variableContext;

Args_variableArgs_variableContext.prototype.args_variable = function() {
    return this.getTypedRuleContext(Args_variableContext,0);
};

Args_variableArgs_variableContext.prototype.COMMA = function() {
    return this.getToken(lilu_grammarParser.COMMA, 0);
};

Args_variableArgs_variableContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};

Args_variableArgs_variableContext.prototype.ID = function() {
    return this.getToken(lilu_grammarParser.ID, 0);
};

Args_variableArgs_variableContext.prototype.LBRACK = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(lilu_grammarParser.LBRACK);
    } else {
        return this.getToken(lilu_grammarParser.LBRACK, i);
    }
};


Args_variableArgs_variableContext.prototype.RBRACK = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(lilu_grammarParser.RBRACK);
    } else {
        return this.getToken(lilu_grammarParser.RBRACK, i);
    }
};

Args_variableArgs_variableContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterArgs_variableArgs_variable(this);
	}
};

Args_variableArgs_variableContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitArgs_variableArgs_variable(this);
	}
};

Args_variableArgs_variableContext.prototype.accept = function(visitor) {
    if ( visitor instanceof lilu_grammarVisitor ) {
        return visitor.visitArgs_variableArgs_variable(this);
    } else {
        return visitor.visitChildren(this);
    }
};



lilu_grammarParser.prototype.args_variable = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new Args_variableContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 16;
    this.enterRecursionRule(localctx, 16, lilu_grammarParser.RULE_args_variable, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        localctx = new Args_variableTypeContext(this, localctx);
        this._ctx = localctx;
        _prevctx = localctx;

        this.state = 138;
        this.type();
        this.state = 143;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===lilu_grammarParser.LBRACK) {
            this.state = 139;
            this.match(lilu_grammarParser.LBRACK);
            this.state = 140;
            this.match(lilu_grammarParser.RBRACK);
            this.state = 145;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 146;
        this.match(lilu_grammarParser.ID);
        this._ctx.stop = this._input.LT(-1);
        this.state = 162;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,12,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new Args_variableArgs_variableContext(this, new Args_variableContext(this, _parentctx, _parentState));
                this.pushNewRecursionContext(localctx, _startState, lilu_grammarParser.RULE_args_variable);
                this.state = 148;
                if (!( this.precpred(this._ctx, 1))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                }
                this.state = 149;
                this.match(lilu_grammarParser.COMMA);
                this.state = 150;
                this.type();
                this.state = 155;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while(_la===lilu_grammarParser.LBRACK) {
                    this.state = 151;
                    this.match(lilu_grammarParser.LBRACK);
                    this.state = 152;
                    this.match(lilu_grammarParser.RBRACK);
                    this.state = 157;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 158;
                this.match(lilu_grammarParser.ID); 
            }
            this.state = 164;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,12,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function Func_dclContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = lilu_grammarParser.RULE_func_dcl;
    return this;
}

Func_dclContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Func_dclContext.prototype.constructor = Func_dclContext;

Func_dclContext.prototype.ID = function() {
    return this.getToken(lilu_grammarParser.ID, 0);
};

Func_dclContext.prototype.LPAREN = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(lilu_grammarParser.LPAREN);
    } else {
        return this.getToken(lilu_grammarParser.LPAREN, i);
    }
};


Func_dclContext.prototype.RPAREN = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(lilu_grammarParser.RPAREN);
    } else {
        return this.getToken(lilu_grammarParser.RPAREN, i);
    }
};


Func_dclContext.prototype.SEMI = function() {
    return this.getToken(lilu_grammarParser.SEMI, 0);
};

Func_dclContext.prototype.args = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ArgsContext);
    } else {
        return this.getTypedRuleContext(ArgsContext,i);
    }
};

Func_dclContext.prototype.ASSIGN = function() {
    return this.getToken(lilu_grammarParser.ASSIGN, 0);
};

Func_dclContext.prototype.args_variable = function() {
    return this.getTypedRuleContext(Args_variableContext,0);
};

Func_dclContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterFunc_dcl(this);
	}
};

Func_dclContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitFunc_dcl(this);
	}
};

Func_dclContext.prototype.accept = function(visitor) {
    if ( visitor instanceof lilu_grammarVisitor ) {
        return visitor.visitFunc_dcl(this);
    } else {
        return visitor.visitChildren(this);
    }
};




lilu_grammarParser.Func_dclContext = Func_dclContext;

lilu_grammarParser.prototype.func_dcl = function() {

    var localctx = new Func_dclContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, lilu_grammarParser.RULE_func_dcl);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 170;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===lilu_grammarParser.LPAREN) {
            this.state = 165;
            this.match(lilu_grammarParser.LPAREN);
            this.state = 166;
            this.args(0);
            this.state = 167;
            this.match(lilu_grammarParser.RPAREN);
            this.state = 168;
            this.match(lilu_grammarParser.ASSIGN);
        }

        this.state = 172;
        this.match(lilu_grammarParser.ID);
        this.state = 173;
        this.match(lilu_grammarParser.LPAREN);
        this.state = 176;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
        if(la_===1) {
            this.state = 174;
            this.args(0);

        } else if(la_===2) {
            this.state = 175;
            this.args_variable(0);

        }
        this.state = 178;
        this.match(lilu_grammarParser.RPAREN);
        this.state = 179;
        this.match(lilu_grammarParser.SEMI);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Type_dclContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = lilu_grammarParser.RULE_type_dcl;
    return this;
}

Type_dclContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Type_dclContext.prototype.constructor = Type_dclContext;

Type_dclContext.prototype.ID = function() {
    return this.getToken(lilu_grammarParser.ID, 0);
};

Type_dclContext.prototype.SEMI = function() {
    return this.getToken(lilu_grammarParser.SEMI, 0);
};

Type_dclContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterType_dcl(this);
	}
};

Type_dclContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitType_dcl(this);
	}
};

Type_dclContext.prototype.accept = function(visitor) {
    if ( visitor instanceof lilu_grammarVisitor ) {
        return visitor.visitType_dcl(this);
    } else {
        return visitor.visitChildren(this);
    }
};




lilu_grammarParser.Type_dclContext = Type_dclContext;

lilu_grammarParser.prototype.type_dcl = function() {

    var localctx = new Type_dclContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, lilu_grammarParser.RULE_type_dcl);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 181;
        this.match(lilu_grammarParser.ID);
        this.state = 182;
        this.match(lilu_grammarParser.SEMI);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Ft_dclContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = lilu_grammarParser.RULE_ft_dcl;
    return this;
}

Ft_dclContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Ft_dclContext.prototype.constructor = Ft_dclContext;

Ft_dclContext.prototype.DECLARE = function() {
    return this.getToken(lilu_grammarParser.DECLARE, 0);
};

Ft_dclContext.prototype.LBRACE = function() {
    return this.getToken(lilu_grammarParser.LBRACE, 0);
};

Ft_dclContext.prototype.RBRACE = function() {
    return this.getToken(lilu_grammarParser.RBRACE, 0);
};

Ft_dclContext.prototype.func_dcl = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Func_dclContext);
    } else {
        return this.getTypedRuleContext(Func_dclContext,i);
    }
};

Ft_dclContext.prototype.type_dcl = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Type_dclContext);
    } else {
        return this.getTypedRuleContext(Type_dclContext,i);
    }
};

Ft_dclContext.prototype.variable_def = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Variable_defContext);
    } else {
        return this.getTypedRuleContext(Variable_defContext,i);
    }
};

Ft_dclContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterFt_dcl(this);
	}
};

Ft_dclContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitFt_dcl(this);
	}
};

Ft_dclContext.prototype.accept = function(visitor) {
    if ( visitor instanceof lilu_grammarVisitor ) {
        return visitor.visitFt_dcl(this);
    } else {
        return visitor.visitChildren(this);
    }
};




lilu_grammarParser.Ft_dclContext = Ft_dclContext;

lilu_grammarParser.prototype.ft_dcl = function() {

    var localctx = new Ft_dclContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, lilu_grammarParser.RULE_ft_dcl);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 184;
        this.match(lilu_grammarParser.DECLARE);
        this.state = 185;
        this.match(lilu_grammarParser.LBRACE);
        this.state = 189; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 189;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
            switch(la_) {
            case 1:
                this.state = 186;
                this.func_dcl();
                break;

            case 2:
                this.state = 187;
                this.type_dcl();
                break;

            case 3:
                this.state = 188;
                this.variable_def();
                break;

            }
            this.state = 191; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << lilu_grammarParser.BOOL) | (1 << lilu_grammarParser.CONST) | (1 << lilu_grammarParser.FLOAT) | (1 << lilu_grammarParser.INT) | (1 << lilu_grammarParser.STRING))) !== 0) || _la===lilu_grammarParser.LPAREN || _la===lilu_grammarParser.ID);
        this.state = 193;
        this.match(lilu_grammarParser.RBRACE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DclContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = lilu_grammarParser.RULE_dcl;
    return this;
}

DclContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DclContext.prototype.constructor = DclContext;

DclContext.prototype.ft_dcl = function() {
    return this.getTypedRuleContext(Ft_dclContext,0);
};

DclContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterDcl(this);
	}
};

DclContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitDcl(this);
	}
};

DclContext.prototype.accept = function(visitor) {
    if ( visitor instanceof lilu_grammarVisitor ) {
        return visitor.visitDcl(this);
    } else {
        return visitor.visitChildren(this);
    }
};




lilu_grammarParser.DclContext = DclContext;

lilu_grammarParser.prototype.dcl = function() {

    var localctx = new DclContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, lilu_grammarParser.RULE_dcl);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 196;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===lilu_grammarParser.DECLARE) {
            this.state = 195;
            this.ft_dcl();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Cond_stmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = lilu_grammarParser.RULE_cond_stmt;
    return this;
}

Cond_stmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Cond_stmtContext.prototype.constructor = Cond_stmtContext;


 
Cond_stmtContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function Cond_stmtIFContext(parser, ctx) {
	Cond_stmtContext.call(this, parser);
    Cond_stmtContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Cond_stmtIFContext.prototype = Object.create(Cond_stmtContext.prototype);
Cond_stmtIFContext.prototype.constructor = Cond_stmtIFContext;

lilu_grammarParser.Cond_stmtIFContext = Cond_stmtIFContext;

Cond_stmtIFContext.prototype.IF = function() {
    return this.getToken(lilu_grammarParser.IF, 0);
};

Cond_stmtIFContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

Cond_stmtIFContext.prototype.block = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(BlockContext);
    } else {
        return this.getTypedRuleContext(BlockContext,i);
    }
};

Cond_stmtIFContext.prototype.ELSE = function() {
    return this.getToken(lilu_grammarParser.ELSE, 0);
};
Cond_stmtIFContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterCond_stmtIF(this);
	}
};

Cond_stmtIFContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitCond_stmtIF(this);
	}
};

Cond_stmtIFContext.prototype.accept = function(visitor) {
    if ( visitor instanceof lilu_grammarVisitor ) {
        return visitor.visitCond_stmtIF(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function Cond_stmtSWITCHContext(parser, ctx) {
	Cond_stmtContext.call(this, parser);
    Cond_stmtContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Cond_stmtSWITCHContext.prototype = Object.create(Cond_stmtContext.prototype);
Cond_stmtSWITCHContext.prototype.constructor = Cond_stmtSWITCHContext;

lilu_grammarParser.Cond_stmtSWITCHContext = Cond_stmtSWITCHContext;

Cond_stmtSWITCHContext.prototype.SWITCH = function() {
    return this.getToken(lilu_grammarParser.SWITCH, 0);
};

Cond_stmtSWITCHContext.prototype.variable = function() {
    return this.getTypedRuleContext(VariableContext,0);
};

Cond_stmtSWITCHContext.prototype.LBRACE = function() {
    return this.getToken(lilu_grammarParser.LBRACE, 0);
};

Cond_stmtSWITCHContext.prototype.DEFAULT = function() {
    return this.getToken(lilu_grammarParser.DEFAULT, 0);
};

Cond_stmtSWITCHContext.prototype.COLON = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(lilu_grammarParser.COLON);
    } else {
        return this.getToken(lilu_grammarParser.COLON, i);
    }
};


Cond_stmtSWITCHContext.prototype.block = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(BlockContext);
    } else {
        return this.getTypedRuleContext(BlockContext,i);
    }
};

Cond_stmtSWITCHContext.prototype.RBRACE = function() {
    return this.getToken(lilu_grammarParser.RBRACE, 0);
};

Cond_stmtSWITCHContext.prototype.CASE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(lilu_grammarParser.CASE);
    } else {
        return this.getToken(lilu_grammarParser.CASE, i);
    }
};


Cond_stmtSWITCHContext.prototype.INT_CONST = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(lilu_grammarParser.INT_CONST);
    } else {
        return this.getToken(lilu_grammarParser.INT_CONST, i);
    }
};


Cond_stmtSWITCHContext.prototype.HEX_CONST = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(lilu_grammarParser.HEX_CONST);
    } else {
        return this.getToken(lilu_grammarParser.HEX_CONST, i);
    }
};

Cond_stmtSWITCHContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterCond_stmtSWITCH(this);
	}
};

Cond_stmtSWITCHContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitCond_stmtSWITCH(this);
	}
};

Cond_stmtSWITCHContext.prototype.accept = function(visitor) {
    if ( visitor instanceof lilu_grammarVisitor ) {
        return visitor.visitCond_stmtSWITCH(this);
    } else {
        return visitor.visitChildren(this);
    }
};



lilu_grammarParser.Cond_stmtContext = Cond_stmtContext;

lilu_grammarParser.prototype.cond_stmt = function() {

    var localctx = new Cond_stmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, lilu_grammarParser.RULE_cond_stmt);
    var _la = 0; // Token type
    try {
        this.state = 222;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case lilu_grammarParser.IF:
            localctx = new Cond_stmtIFContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 198;
            this.match(lilu_grammarParser.IF);
            this.state = 199;
            this.expr(0);
            this.state = 200;
            this.block();
            this.state = 203;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===lilu_grammarParser.ELSE) {
                this.state = 201;
                this.match(lilu_grammarParser.ELSE);
                this.state = 202;
                this.block();
            }

            break;
        case lilu_grammarParser.SWITCH:
            localctx = new Cond_stmtSWITCHContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 205;
            this.match(lilu_grammarParser.SWITCH);
            this.state = 206;
            this.variable();
            this.state = 207;
            this.match(lilu_grammarParser.LBRACE);
            this.state = 214;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===lilu_grammarParser.CASE) {
                this.state = 208;
                this.match(lilu_grammarParser.CASE);
                this.state = 209;
                _la = this._input.LA(1);
                if(!(_la===lilu_grammarParser.HEX_CONST || _la===lilu_grammarParser.INT_CONST)) {
                this._errHandler.recoverInline(this);
                }
                else {
                	this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 210;
                this.match(lilu_grammarParser.COLON);
                this.state = 211;
                this.block();
                this.state = 216;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 217;
            this.match(lilu_grammarParser.DEFAULT);
            this.state = 218;
            this.match(lilu_grammarParser.COLON);
            this.state = 219;
            this.block();
            this.state = 220;
            this.match(lilu_grammarParser.RBRACE);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Loop_stmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = lilu_grammarParser.RULE_loop_stmt;
    return this;
}

Loop_stmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Loop_stmtContext.prototype.constructor = Loop_stmtContext;


 
Loop_stmtContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function Loop_stmtWHILEContext(parser, ctx) {
	Loop_stmtContext.call(this, parser);
    Loop_stmtContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Loop_stmtWHILEContext.prototype = Object.create(Loop_stmtContext.prototype);
Loop_stmtWHILEContext.prototype.constructor = Loop_stmtWHILEContext;

lilu_grammarParser.Loop_stmtWHILEContext = Loop_stmtWHILEContext;

Loop_stmtWHILEContext.prototype.WHILE = function() {
    return this.getToken(lilu_grammarParser.WHILE, 0);
};

Loop_stmtWHILEContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

Loop_stmtWHILEContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};
Loop_stmtWHILEContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterLoop_stmtWHILE(this);
	}
};

Loop_stmtWHILEContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitLoop_stmtWHILE(this);
	}
};

Loop_stmtWHILEContext.prototype.accept = function(visitor) {
    if ( visitor instanceof lilu_grammarVisitor ) {
        return visitor.visitLoop_stmtWHILE(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function Loop_stmtFORContext(parser, ctx) {
	Loop_stmtContext.call(this, parser);
    Loop_stmtContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Loop_stmtFORContext.prototype = Object.create(Loop_stmtContext.prototype);
Loop_stmtFORContext.prototype.constructor = Loop_stmtFORContext;

lilu_grammarParser.Loop_stmtFORContext = Loop_stmtFORContext;

Loop_stmtFORContext.prototype.FOR = function() {
    return this.getToken(lilu_grammarParser.FOR, 0);
};

Loop_stmtFORContext.prototype.SEMI = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(lilu_grammarParser.SEMI);
    } else {
        return this.getToken(lilu_grammarParser.SEMI, i);
    }
};


Loop_stmtFORContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

Loop_stmtFORContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

Loop_stmtFORContext.prototype.assign = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AssignContext);
    } else {
        return this.getTypedRuleContext(AssignContext,i);
    }
};

Loop_stmtFORContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};
Loop_stmtFORContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterLoop_stmtFOR(this);
	}
};

Loop_stmtFORContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitLoop_stmtFOR(this);
	}
};

Loop_stmtFORContext.prototype.accept = function(visitor) {
    if ( visitor instanceof lilu_grammarVisitor ) {
        return visitor.visitLoop_stmtFOR(this);
    } else {
        return visitor.visitChildren(this);
    }
};



lilu_grammarParser.Loop_stmtContext = Loop_stmtContext;

lilu_grammarParser.prototype.loop_stmt = function() {

    var localctx = new Loop_stmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, lilu_grammarParser.RULE_loop_stmt);
    var _la = 0; // Token type
    try {
        this.state = 243;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case lilu_grammarParser.FOR:
            localctx = new Loop_stmtFORContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 224;
            this.match(lilu_grammarParser.FOR);
            this.state = 229;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << lilu_grammarParser.BOOL) | (1 << lilu_grammarParser.FLOAT) | (1 << lilu_grammarParser.INT) | (1 << lilu_grammarParser.STRING) | (1 << lilu_grammarParser.SUPER) | (1 << lilu_grammarParser.THIS))) !== 0) || _la===lilu_grammarParser.LPAREN || _la===lilu_grammarParser.ID) {
                this.state = 226;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
                if(la_===1) {
                    this.state = 225;
                    this.type();

                }
                this.state = 228;
                this.assign();
            }

            this.state = 231;
            this.match(lilu_grammarParser.SEMI);
            this.state = 232;
            this.expr(0);
            this.state = 233;
            this.match(lilu_grammarParser.SEMI);
            this.state = 235;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===lilu_grammarParser.SUPER || _la===lilu_grammarParser.THIS || _la===lilu_grammarParser.LPAREN || _la===lilu_grammarParser.ID) {
                this.state = 234;
                this.assign();
            }

            this.state = 237;
            this.block();
            break;
        case lilu_grammarParser.WHILE:
            localctx = new Loop_stmtWHILEContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 239;
            this.match(lilu_grammarParser.WHILE);
            this.state = 240;
            this.expr(0);
            this.state = 241;
            this.block();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = lilu_grammarParser.RULE_list;
    return this;
}

ListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ListContext.prototype.constructor = ListContext;

ListContext.prototype.LBRACK = function() {
    return this.getToken(lilu_grammarParser.LBRACK, 0);
};

ListContext.prototype.RBRACK = function() {
    return this.getToken(lilu_grammarParser.RBRACK, 0);
};

ListContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

ListContext.prototype.list = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ListContext);
    } else {
        return this.getTypedRuleContext(ListContext,i);
    }
};

ListContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(lilu_grammarParser.COMMA);
    } else {
        return this.getToken(lilu_grammarParser.COMMA, i);
    }
};


ListContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterList(this);
	}
};

ListContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitList(this);
	}
};

ListContext.prototype.accept = function(visitor) {
    if ( visitor instanceof lilu_grammarVisitor ) {
        return visitor.visitList(this);
    } else {
        return visitor.visitChildren(this);
    }
};




lilu_grammarParser.ListContext = ListContext;

lilu_grammarParser.prototype.list = function() {

    var localctx = new ListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, lilu_grammarParser.RULE_list);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 245;
        this.match(lilu_grammarParser.LBRACK);
        this.state = 248;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
        switch(la_) {
        case 1:
            this.state = 246;
            this.expr(0);
            break;

        case 2:
            this.state = 247;
            this.list();
            break;

        }
        this.state = 257;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===lilu_grammarParser.COMMA) {
            this.state = 250;
            this.match(lilu_grammarParser.COMMA);
            this.state = 253;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,26,this._ctx);
            switch(la_) {
            case 1:
                this.state = 251;
                this.expr(0);
                break;

            case 2:
                this.state = 252;
                this.list();
                break;

            }
            this.state = 259;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 260;
        this.match(lilu_grammarParser.RBRACK);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ParamsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = lilu_grammarParser.RULE_params;
    return this;
}

ParamsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParamsContext.prototype.constructor = ParamsContext;


 
ParamsContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function ParamsExprContext(parser, ctx) {
	ParamsContext.call(this, parser);
    ParamsContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ParamsExprContext.prototype = Object.create(ParamsContext.prototype);
ParamsExprContext.prototype.constructor = ParamsExprContext;

lilu_grammarParser.ParamsExprContext = ParamsExprContext;

ParamsExprContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};
ParamsExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterParamsExpr(this);
	}
};

ParamsExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitParamsExpr(this);
	}
};

ParamsExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof lilu_grammarVisitor ) {
        return visitor.visitParamsExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ParamsExprCOMMAContext(parser, ctx) {
	ParamsContext.call(this, parser);
    ParamsContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ParamsExprCOMMAContext.prototype = Object.create(ParamsContext.prototype);
ParamsExprCOMMAContext.prototype.constructor = ParamsExprCOMMAContext;

lilu_grammarParser.ParamsExprCOMMAContext = ParamsExprCOMMAContext;

ParamsExprCOMMAContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

ParamsExprCOMMAContext.prototype.COMMA = function() {
    return this.getToken(lilu_grammarParser.COMMA, 0);
};

ParamsExprCOMMAContext.prototype.params = function() {
    return this.getTypedRuleContext(ParamsContext,0);
};
ParamsExprCOMMAContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterParamsExprCOMMA(this);
	}
};

ParamsExprCOMMAContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitParamsExprCOMMA(this);
	}
};

ParamsExprCOMMAContext.prototype.accept = function(visitor) {
    if ( visitor instanceof lilu_grammarVisitor ) {
        return visitor.visitParamsExprCOMMA(this);
    } else {
        return visitor.visitChildren(this);
    }
};



lilu_grammarParser.ParamsContext = ParamsContext;

lilu_grammarParser.prototype.params = function() {

    var localctx = new ParamsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, lilu_grammarParser.RULE_params);
    try {
        this.state = 267;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,28,this._ctx);
        switch(la_) {
        case 1:
            localctx = new ParamsExprContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 262;
            this.expr(0);
            break;

        case 2:
            localctx = new ParamsExprCOMMAContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 263;
            this.expr(0);
            this.state = 264;
            this.match(lilu_grammarParser.COMMA);
            this.state = 265;
            this.params();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Handle_callContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = lilu_grammarParser.RULE_handle_call;
    return this;
}

Handle_callContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Handle_callContext.prototype.constructor = Handle_callContext;

Handle_callContext.prototype.ID = function() {
    return this.getToken(lilu_grammarParser.ID, 0);
};

Handle_callContext.prototype.LPAREN = function() {
    return this.getToken(lilu_grammarParser.LPAREN, 0);
};

Handle_callContext.prototype.RPAREN = function() {
    return this.getToken(lilu_grammarParser.RPAREN, 0);
};

Handle_callContext.prototype.params = function() {
    return this.getTypedRuleContext(ParamsContext,0);
};

Handle_callContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterHandle_call(this);
	}
};

Handle_callContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitHandle_call(this);
	}
};

Handle_callContext.prototype.accept = function(visitor) {
    if ( visitor instanceof lilu_grammarVisitor ) {
        return visitor.visitHandle_call(this);
    } else {
        return visitor.visitChildren(this);
    }
};




lilu_grammarParser.Handle_callContext = Handle_callContext;

lilu_grammarParser.prototype.handle_call = function() {

    var localctx = new Handle_callContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, lilu_grammarParser.RULE_handle_call);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 269;
        this.match(lilu_grammarParser.ID);
        this.state = 270;
        this.match(lilu_grammarParser.LPAREN);
        this.state = 272;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(((((_la - 4)) & ~0x1f) == 0 && ((1 << (_la - 4)) & ((1 << (lilu_grammarParser.BANG - 4)) | (1 << (lilu_grammarParser.TILDE - 4)) | (1 << (lilu_grammarParser.ALLOCATE - 4)) | (1 << (lilu_grammarParser.NIL - 4)) | (1 << (lilu_grammarParser.READ - 4)) | (1 << (lilu_grammarParser.SUPER - 4)) | (1 << (lilu_grammarParser.THIS - 4)) | (1 << (lilu_grammarParser.WRITE - 4)) | (1 << (lilu_grammarParser.REAL_CONST - 4)))) !== 0) || ((((_la - 36)) & ~0x1f) == 0 && ((1 << (_la - 36)) & ((1 << (lilu_grammarParser.HEX_CONST - 36)) | (1 << (lilu_grammarParser.INT_CONST - 36)) | (1 << (lilu_grammarParser.BOOL_CONST - 36)) | (1 << (lilu_grammarParser.STRING_CONST - 36)) | (1 << (lilu_grammarParser.LPAREN - 36)) | (1 << (lilu_grammarParser.LBRACK - 36)) | (1 << (lilu_grammarParser.SUB - 36)) | (1 << (lilu_grammarParser.ID - 36)))) !== 0)) {
            this.state = 271;
            this.params();
        }

        this.state = 274;
        this.match(lilu_grammarParser.RPAREN);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Func_callContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = lilu_grammarParser.RULE_func_call;
    return this;
}

Func_callContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Func_callContext.prototype.constructor = Func_callContext;


 
Func_callContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function Func_callREADContext(parser, ctx) {
	Func_callContext.call(this, parser);
    Func_callContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Func_callREADContext.prototype = Object.create(Func_callContext.prototype);
Func_callREADContext.prototype.constructor = Func_callREADContext;

lilu_grammarParser.Func_callREADContext = Func_callREADContext;

Func_callREADContext.prototype.READ = function() {
    return this.getToken(lilu_grammarParser.READ, 0);
};

Func_callREADContext.prototype.LPAREN = function() {
    return this.getToken(lilu_grammarParser.LPAREN, 0);
};

Func_callREADContext.prototype.variable = function() {
    return this.getTypedRuleContext(VariableContext,0);
};

Func_callREADContext.prototype.RPAREN = function() {
    return this.getToken(lilu_grammarParser.RPAREN, 0);
};
Func_callREADContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterFunc_callREAD(this);
	}
};

Func_callREADContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitFunc_callREAD(this);
	}
};

Func_callREADContext.prototype.accept = function(visitor) {
    if ( visitor instanceof lilu_grammarVisitor ) {
        return visitor.visitFunc_callREAD(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function Func_callWRITEContext(parser, ctx) {
	Func_callContext.call(this, parser);
    Func_callContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Func_callWRITEContext.prototype = Object.create(Func_callContext.prototype);
Func_callWRITEContext.prototype.constructor = Func_callWRITEContext;

lilu_grammarParser.Func_callWRITEContext = Func_callWRITEContext;

Func_callWRITEContext.prototype.WRITE = function() {
    return this.getToken(lilu_grammarParser.WRITE, 0);
};

Func_callWRITEContext.prototype.LPAREN = function() {
    return this.getToken(lilu_grammarParser.LPAREN, 0);
};

Func_callWRITEContext.prototype.variable = function() {
    return this.getTypedRuleContext(VariableContext,0);
};

Func_callWRITEContext.prototype.RPAREN = function() {
    return this.getToken(lilu_grammarParser.RPAREN, 0);
};
Func_callWRITEContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterFunc_callWRITE(this);
	}
};

Func_callWRITEContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitFunc_callWRITE(this);
	}
};

Func_callWRITEContext.prototype.accept = function(visitor) {
    if ( visitor instanceof lilu_grammarVisitor ) {
        return visitor.visitFunc_callWRITE(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function Func_callVariableContext(parser, ctx) {
	Func_callContext.call(this, parser);
    Func_callContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Func_callVariableContext.prototype = Object.create(Func_callContext.prototype);
Func_callVariableContext.prototype.constructor = Func_callVariableContext;

lilu_grammarParser.Func_callVariableContext = Func_callVariableContext;

Func_callVariableContext.prototype.handle_call = function() {
    return this.getTypedRuleContext(Handle_callContext,0);
};

Func_callVariableContext.prototype.variable = function() {
    return this.getTypedRuleContext(VariableContext,0);
};

Func_callVariableContext.prototype.DOT = function() {
    return this.getToken(lilu_grammarParser.DOT, 0);
};
Func_callVariableContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterFunc_callVariable(this);
	}
};

Func_callVariableContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitFunc_callVariable(this);
	}
};

Func_callVariableContext.prototype.accept = function(visitor) {
    if ( visitor instanceof lilu_grammarVisitor ) {
        return visitor.visitFunc_callVariable(this);
    } else {
        return visitor.visitChildren(this);
    }
};



lilu_grammarParser.Func_callContext = Func_callContext;

lilu_grammarParser.prototype.func_call = function() {

    var localctx = new Func_callContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, lilu_grammarParser.RULE_func_call);
    try {
        this.state = 292;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case lilu_grammarParser.SUPER:
        case lilu_grammarParser.THIS:
        case lilu_grammarParser.ID:
            localctx = new Func_callVariableContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 279;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,30,this._ctx);
            if(la_===1) {
                this.state = 276;
                this.variable();
                this.state = 277;
                this.match(lilu_grammarParser.DOT);

            }
            this.state = 281;
            this.handle_call();
            break;
        case lilu_grammarParser.READ:
            localctx = new Func_callREADContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 282;
            this.match(lilu_grammarParser.READ);
            this.state = 283;
            this.match(lilu_grammarParser.LPAREN);
            this.state = 284;
            this.variable();
            this.state = 285;
            this.match(lilu_grammarParser.RPAREN);
            break;
        case lilu_grammarParser.WRITE:
            localctx = new Func_callWRITEContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 287;
            this.match(lilu_grammarParser.WRITE);
            this.state = 288;
            this.match(lilu_grammarParser.LPAREN);
            this.state = 289;
            this.variable();
            this.state = 290;
            this.match(lilu_grammarParser.RPAREN);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = lilu_grammarParser.RULE_stmt;
    return this;
}

StmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StmtContext.prototype.constructor = StmtContext;


 
StmtContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function StmtBREAKContext(parser, ctx) {
	StmtContext.call(this, parser);
    StmtContext.prototype.copyFrom.call(this, ctx);
    return this;
}

StmtBREAKContext.prototype = Object.create(StmtContext.prototype);
StmtBREAKContext.prototype.constructor = StmtBREAKContext;

lilu_grammarParser.StmtBREAKContext = StmtBREAKContext;

StmtBREAKContext.prototype.BREAK = function() {
    return this.getToken(lilu_grammarParser.BREAK, 0);
};

StmtBREAKContext.prototype.SEMI = function() {
    return this.getToken(lilu_grammarParser.SEMI, 0);
};
StmtBREAKContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterStmtBREAK(this);
	}
};

StmtBREAKContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitStmtBREAK(this);
	}
};

StmtBREAKContext.prototype.accept = function(visitor) {
    if ( visitor instanceof lilu_grammarVisitor ) {
        return visitor.visitStmtBREAK(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function StmtDESTRUCTContext(parser, ctx) {
	StmtContext.call(this, parser);
    StmtContext.prototype.copyFrom.call(this, ctx);
    return this;
}

StmtDESTRUCTContext.prototype = Object.create(StmtContext.prototype);
StmtDESTRUCTContext.prototype.constructor = StmtDESTRUCTContext;

lilu_grammarParser.StmtDESTRUCTContext = StmtDESTRUCTContext;

StmtDESTRUCTContext.prototype.DESTRUCT = function() {
    return this.getToken(lilu_grammarParser.DESTRUCT, 0);
};

StmtDESTRUCTContext.prototype.ID = function() {
    return this.getToken(lilu_grammarParser.ID, 0);
};

StmtDESTRUCTContext.prototype.SEMI = function() {
    return this.getToken(lilu_grammarParser.SEMI, 0);
};

StmtDESTRUCTContext.prototype.LBRACK = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(lilu_grammarParser.LBRACK);
    } else {
        return this.getToken(lilu_grammarParser.LBRACK, i);
    }
};


StmtDESTRUCTContext.prototype.RBRACK = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(lilu_grammarParser.RBRACK);
    } else {
        return this.getToken(lilu_grammarParser.RBRACK, i);
    }
};

StmtDESTRUCTContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterStmtDESTRUCT(this);
	}
};

StmtDESTRUCTContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitStmtDESTRUCT(this);
	}
};

StmtDESTRUCTContext.prototype.accept = function(visitor) {
    if ( visitor instanceof lilu_grammarVisitor ) {
        return visitor.visitStmtDESTRUCT(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function StmtLoop_stmtContext(parser, ctx) {
	StmtContext.call(this, parser);
    StmtContext.prototype.copyFrom.call(this, ctx);
    return this;
}

StmtLoop_stmtContext.prototype = Object.create(StmtContext.prototype);
StmtLoop_stmtContext.prototype.constructor = StmtLoop_stmtContext;

lilu_grammarParser.StmtLoop_stmtContext = StmtLoop_stmtContext;

StmtLoop_stmtContext.prototype.loop_stmt = function() {
    return this.getTypedRuleContext(Loop_stmtContext,0);
};
StmtLoop_stmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterStmtLoop_stmt(this);
	}
};

StmtLoop_stmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitStmtLoop_stmt(this);
	}
};

StmtLoop_stmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof lilu_grammarVisitor ) {
        return visitor.visitStmtLoop_stmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function StmtCONTINUEContext(parser, ctx) {
	StmtContext.call(this, parser);
    StmtContext.prototype.copyFrom.call(this, ctx);
    return this;
}

StmtCONTINUEContext.prototype = Object.create(StmtContext.prototype);
StmtCONTINUEContext.prototype.constructor = StmtCONTINUEContext;

lilu_grammarParser.StmtCONTINUEContext = StmtCONTINUEContext;

StmtCONTINUEContext.prototype.CONTINUE = function() {
    return this.getToken(lilu_grammarParser.CONTINUE, 0);
};

StmtCONTINUEContext.prototype.SEMI = function() {
    return this.getToken(lilu_grammarParser.SEMI, 0);
};
StmtCONTINUEContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterStmtCONTINUE(this);
	}
};

StmtCONTINUEContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitStmtCONTINUE(this);
	}
};

StmtCONTINUEContext.prototype.accept = function(visitor) {
    if ( visitor instanceof lilu_grammarVisitor ) {
        return visitor.visitStmtCONTINUE(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function StmtFunc_callContext(parser, ctx) {
	StmtContext.call(this, parser);
    StmtContext.prototype.copyFrom.call(this, ctx);
    return this;
}

StmtFunc_callContext.prototype = Object.create(StmtContext.prototype);
StmtFunc_callContext.prototype.constructor = StmtFunc_callContext;

lilu_grammarParser.StmtFunc_callContext = StmtFunc_callContext;

StmtFunc_callContext.prototype.func_call = function() {
    return this.getTypedRuleContext(Func_callContext,0);
};

StmtFunc_callContext.prototype.SEMI = function() {
    return this.getToken(lilu_grammarParser.SEMI, 0);
};
StmtFunc_callContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterStmtFunc_call(this);
	}
};

StmtFunc_callContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitStmtFunc_call(this);
	}
};

StmtFunc_callContext.prototype.accept = function(visitor) {
    if ( visitor instanceof lilu_grammarVisitor ) {
        return visitor.visitStmtFunc_call(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function StmtRETURNContext(parser, ctx) {
	StmtContext.call(this, parser);
    StmtContext.prototype.copyFrom.call(this, ctx);
    return this;
}

StmtRETURNContext.prototype = Object.create(StmtContext.prototype);
StmtRETURNContext.prototype.constructor = StmtRETURNContext;

lilu_grammarParser.StmtRETURNContext = StmtRETURNContext;

StmtRETURNContext.prototype.RETURN = function() {
    return this.getToken(lilu_grammarParser.RETURN, 0);
};

StmtRETURNContext.prototype.SEMI = function() {
    return this.getToken(lilu_grammarParser.SEMI, 0);
};
StmtRETURNContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterStmtRETURN(this);
	}
};

StmtRETURNContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitStmtRETURN(this);
	}
};

StmtRETURNContext.prototype.accept = function(visitor) {
    if ( visitor instanceof lilu_grammarVisitor ) {
        return visitor.visitStmtRETURN(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function StmtCond_stmtContext(parser, ctx) {
	StmtContext.call(this, parser);
    StmtContext.prototype.copyFrom.call(this, ctx);
    return this;
}

StmtCond_stmtContext.prototype = Object.create(StmtContext.prototype);
StmtCond_stmtContext.prototype.constructor = StmtCond_stmtContext;

lilu_grammarParser.StmtCond_stmtContext = StmtCond_stmtContext;

StmtCond_stmtContext.prototype.cond_stmt = function() {
    return this.getTypedRuleContext(Cond_stmtContext,0);
};
StmtCond_stmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterStmtCond_stmt(this);
	}
};

StmtCond_stmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitStmtCond_stmt(this);
	}
};

StmtCond_stmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof lilu_grammarVisitor ) {
        return visitor.visitStmtCond_stmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function StmtAssignContext(parser, ctx) {
	StmtContext.call(this, parser);
    StmtContext.prototype.copyFrom.call(this, ctx);
    return this;
}

StmtAssignContext.prototype = Object.create(StmtContext.prototype);
StmtAssignContext.prototype.constructor = StmtAssignContext;

lilu_grammarParser.StmtAssignContext = StmtAssignContext;

StmtAssignContext.prototype.assign = function() {
    return this.getTypedRuleContext(AssignContext,0);
};

StmtAssignContext.prototype.SEMI = function() {
    return this.getToken(lilu_grammarParser.SEMI, 0);
};
StmtAssignContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterStmtAssign(this);
	}
};

StmtAssignContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitStmtAssign(this);
	}
};

StmtAssignContext.prototype.accept = function(visitor) {
    if ( visitor instanceof lilu_grammarVisitor ) {
        return visitor.visitStmtAssign(this);
    } else {
        return visitor.visitChildren(this);
    }
};



lilu_grammarParser.StmtContext = StmtContext;

lilu_grammarParser.prototype.stmt = function() {

    var localctx = new StmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, lilu_grammarParser.RULE_stmt);
    var _la = 0; // Token type
    try {
        this.state = 318;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,33,this._ctx);
        switch(la_) {
        case 1:
            localctx = new StmtAssignContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 294;
            this.assign();
            this.state = 295;
            this.match(lilu_grammarParser.SEMI);
            break;

        case 2:
            localctx = new StmtFunc_callContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 297;
            this.func_call();
            this.state = 298;
            this.match(lilu_grammarParser.SEMI);
            break;

        case 3:
            localctx = new StmtCond_stmtContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 300;
            this.cond_stmt();
            break;

        case 4:
            localctx = new StmtLoop_stmtContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 301;
            this.loop_stmt();
            break;

        case 5:
            localctx = new StmtRETURNContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 302;
            this.match(lilu_grammarParser.RETURN);
            this.state = 303;
            this.match(lilu_grammarParser.SEMI);
            break;

        case 6:
            localctx = new StmtBREAKContext(this, localctx);
            this.enterOuterAlt(localctx, 6);
            this.state = 304;
            this.match(lilu_grammarParser.BREAK);
            this.state = 305;
            this.match(lilu_grammarParser.SEMI);
            break;

        case 7:
            localctx = new StmtCONTINUEContext(this, localctx);
            this.enterOuterAlt(localctx, 7);
            this.state = 306;
            this.match(lilu_grammarParser.CONTINUE);
            this.state = 307;
            this.match(lilu_grammarParser.SEMI);
            break;

        case 8:
            localctx = new StmtDESTRUCTContext(this, localctx);
            this.enterOuterAlt(localctx, 8);
            this.state = 308;
            this.match(lilu_grammarParser.DESTRUCT);
            this.state = 313;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===lilu_grammarParser.LBRACK) {
                this.state = 309;
                this.match(lilu_grammarParser.LBRACK);
                this.state = 310;
                this.match(lilu_grammarParser.RBRACK);
                this.state = 315;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 316;
            this.match(lilu_grammarParser.ID);
            this.state = 317;
            this.match(lilu_grammarParser.SEMI);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function BlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = lilu_grammarParser.RULE_block;
    return this;
}

BlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BlockContext.prototype.constructor = BlockContext;

BlockContext.prototype.LBRACE = function() {
    return this.getToken(lilu_grammarParser.LBRACE, 0);
};

BlockContext.prototype.RBRACE = function() {
    return this.getToken(lilu_grammarParser.RBRACE, 0);
};

BlockContext.prototype.variable_def = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Variable_defContext);
    } else {
        return this.getTypedRuleContext(Variable_defContext,i);
    }
};

BlockContext.prototype.stmt = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StmtContext);
    } else {
        return this.getTypedRuleContext(StmtContext,i);
    }
};

BlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterBlock(this);
	}
};

BlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitBlock(this);
	}
};

BlockContext.prototype.accept = function(visitor) {
    if ( visitor instanceof lilu_grammarVisitor ) {
        return visitor.visitBlock(this);
    } else {
        return visitor.visitChildren(this);
    }
};




lilu_grammarParser.BlockContext = BlockContext;

lilu_grammarParser.prototype.block = function() {

    var localctx = new BlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, lilu_grammarParser.RULE_block);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 320;
        this.match(lilu_grammarParser.LBRACE);
        this.state = 325;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 7)) & ~0x1f) == 0 && ((1 << (_la - 7)) & ((1 << (lilu_grammarParser.BOOL - 7)) | (1 << (lilu_grammarParser.BREAK - 7)) | (1 << (lilu_grammarParser.CONST - 7)) | (1 << (lilu_grammarParser.CONTINUE - 7)) | (1 << (lilu_grammarParser.DESTRUCT - 7)) | (1 << (lilu_grammarParser.FLOAT - 7)) | (1 << (lilu_grammarParser.FOR - 7)) | (1 << (lilu_grammarParser.IF - 7)) | (1 << (lilu_grammarParser.INT - 7)) | (1 << (lilu_grammarParser.READ - 7)) | (1 << (lilu_grammarParser.RETURN - 7)) | (1 << (lilu_grammarParser.STRING - 7)) | (1 << (lilu_grammarParser.SUPER - 7)) | (1 << (lilu_grammarParser.SWITCH - 7)) | (1 << (lilu_grammarParser.THIS - 7)) | (1 << (lilu_grammarParser.WHILE - 7)) | (1 << (lilu_grammarParser.WRITE - 7)))) !== 0) || _la===lilu_grammarParser.LPAREN || _la===lilu_grammarParser.ID) {
            this.state = 323;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,34,this._ctx);
            switch(la_) {
            case 1:
                this.state = 321;
                this.variable_def();
                break;

            case 2:
                this.state = 322;
                this.stmt();
                break;

            }
            this.state = 327;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 328;
        this.match(lilu_grammarParser.RBRACE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = lilu_grammarParser.RULE_expr;
    return this;
}

ExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprContext.prototype.constructor = ExprContext;


 
ExprContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function ExprParenContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ExprParenContext.prototype = Object.create(ExprContext.prototype);
ExprParenContext.prototype.constructor = ExprParenContext;

lilu_grammarParser.ExprParenContext = ExprParenContext;

ExprParenContext.prototype.LPAREN = function() {
    return this.getToken(lilu_grammarParser.LPAREN, 0);
};

ExprParenContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

ExprParenContext.prototype.RPAREN = function() {
    return this.getToken(lilu_grammarParser.RPAREN, 0);
};

ExprParenContext.prototype.ID = function() {
    return this.getToken(lilu_grammarParser.ID, 0);
};

ExprParenContext.prototype.const_val = function() {
    return this.getTypedRuleContext(Const_valContext,0);
};

ExprParenContext.prototype.ALLOCATE = function() {
    return this.getToken(lilu_grammarParser.ALLOCATE, 0);
};

ExprParenContext.prototype.handle_call = function() {
    return this.getTypedRuleContext(Handle_callContext,0);
};

ExprParenContext.prototype.func_call = function() {
    return this.getTypedRuleContext(Func_callContext,0);
};

ExprParenContext.prototype.variable = function() {
    return this.getTypedRuleContext(VariableContext,0);
};

ExprParenContext.prototype.list = function() {
    return this.getTypedRuleContext(ListContext,0);
};

ExprParenContext.prototype.NIL = function() {
    return this.getToken(lilu_grammarParser.NIL, 0);
};
ExprParenContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterExprParen(this);
	}
};

ExprParenContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitExprParen(this);
	}
};

ExprParenContext.prototype.accept = function(visitor) {
    if ( visitor instanceof lilu_grammarVisitor ) {
        return visitor.visitExprParen(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ExprExprCaretContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ExprExprCaretContext.prototype = Object.create(ExprContext.prototype);
ExprExprCaretContext.prototype.constructor = ExprExprCaretContext;

lilu_grammarParser.ExprExprCaretContext = ExprExprCaretContext;

ExprExprCaretContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

ExprExprCaretContext.prototype.CARET = function() {
    return this.getToken(lilu_grammarParser.CARET, 0);
};
ExprExprCaretContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterExprExprCaret(this);
	}
};

ExprExprCaretContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitExprExprCaret(this);
	}
};

ExprExprCaretContext.prototype.accept = function(visitor) {
    if ( visitor instanceof lilu_grammarVisitor ) {
        return visitor.visitExprExprCaret(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ExprExprLtGtContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ExprExprLtGtContext.prototype = Object.create(ExprContext.prototype);
ExprExprLtGtContext.prototype.constructor = ExprExprLtGtContext;

lilu_grammarParser.ExprExprLtGtContext = ExprExprLtGtContext;

ExprExprLtGtContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

ExprExprLtGtContext.prototype.LT = function() {
    return this.getToken(lilu_grammarParser.LT, 0);
};

ExprExprLtGtContext.prototype.GT = function() {
    return this.getToken(lilu_grammarParser.GT, 0);
};
ExprExprLtGtContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterExprExprLtGt(this);
	}
};

ExprExprLtGtContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitExprExprLtGt(this);
	}
};

ExprExprLtGtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof lilu_grammarVisitor ) {
        return visitor.visitExprExprLtGt(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ExprExprBitandContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ExprExprBitandContext.prototype = Object.create(ExprContext.prototype);
ExprExprBitandContext.prototype.constructor = ExprExprBitandContext;

lilu_grammarParser.ExprExprBitandContext = ExprExprBitandContext;

ExprExprBitandContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

ExprExprBitandContext.prototype.BITAND = function() {
    return this.getToken(lilu_grammarParser.BITAND, 0);
};
ExprExprBitandContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterExprExprBitand(this);
	}
};

ExprExprBitandContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitExprExprBitand(this);
	}
};

ExprExprBitandContext.prototype.accept = function(visitor) {
    if ( visitor instanceof lilu_grammarVisitor ) {
        return visitor.visitExprExprBitand(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ExprExprBitorContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ExprExprBitorContext.prototype = Object.create(ExprContext.prototype);
ExprExprBitorContext.prototype.constructor = ExprExprBitorContext;

lilu_grammarParser.ExprExprBitorContext = ExprExprBitorContext;

ExprExprBitorContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

ExprExprBitorContext.prototype.BITOR = function() {
    return this.getToken(lilu_grammarParser.BITOR, 0);
};
ExprExprBitorContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterExprExprBitor(this);
	}
};

ExprExprBitorContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitExprExprBitor(this);
	}
};

ExprExprBitorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof lilu_grammarVisitor ) {
        return visitor.visitExprExprBitor(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ExprExprOrContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ExprExprOrContext.prototype = Object.create(ExprContext.prototype);
ExprExprOrContext.prototype.constructor = ExprExprOrContext;

lilu_grammarParser.ExprExprOrContext = ExprExprOrContext;

ExprExprOrContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

ExprExprOrContext.prototype.OR = function() {
    return this.getToken(lilu_grammarParser.OR, 0);
};
ExprExprOrContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterExprExprOr(this);
	}
};

ExprExprOrContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitExprExprOr(this);
	}
};

ExprExprOrContext.prototype.accept = function(visitor) {
    if ( visitor instanceof lilu_grammarVisitor ) {
        return visitor.visitExprExprOr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ExprExprAddSubContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ExprExprAddSubContext.prototype = Object.create(ExprContext.prototype);
ExprExprAddSubContext.prototype.constructor = ExprExprAddSubContext;

lilu_grammarParser.ExprExprAddSubContext = ExprExprAddSubContext;

ExprExprAddSubContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

ExprExprAddSubContext.prototype.ADD = function() {
    return this.getToken(lilu_grammarParser.ADD, 0);
};

ExprExprAddSubContext.prototype.SUB = function() {
    return this.getToken(lilu_grammarParser.SUB, 0);
};
ExprExprAddSubContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterExprExprAddSub(this);
	}
};

ExprExprAddSubContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitExprExprAddSub(this);
	}
};

ExprExprAddSubContext.prototype.accept = function(visitor) {
    if ( visitor instanceof lilu_grammarVisitor ) {
        return visitor.visitExprExprAddSub(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ExprExprMulDivModContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ExprExprMulDivModContext.prototype = Object.create(ExprContext.prototype);
ExprExprMulDivModContext.prototype.constructor = ExprExprMulDivModContext;

lilu_grammarParser.ExprExprMulDivModContext = ExprExprMulDivModContext;

ExprExprMulDivModContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

ExprExprMulDivModContext.prototype.MUL = function() {
    return this.getToken(lilu_grammarParser.MUL, 0);
};

ExprExprMulDivModContext.prototype.DIV = function() {
    return this.getToken(lilu_grammarParser.DIV, 0);
};

ExprExprMulDivModContext.prototype.MOD = function() {
    return this.getToken(lilu_grammarParser.MOD, 0);
};
ExprExprMulDivModContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterExprExprMulDivMod(this);
	}
};

ExprExprMulDivModContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitExprExprMulDivMod(this);
	}
};

ExprExprMulDivModContext.prototype.accept = function(visitor) {
    if ( visitor instanceof lilu_grammarVisitor ) {
        return visitor.visitExprExprMulDivMod(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ExprUnary_opContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ExprUnary_opContext.prototype = Object.create(ExprContext.prototype);
ExprUnary_opContext.prototype.constructor = ExprUnary_opContext;

lilu_grammarParser.ExprUnary_opContext = ExprUnary_opContext;

ExprUnary_opContext.prototype.unary_op = function() {
    return this.getTypedRuleContext(Unary_opContext,0);
};

ExprUnary_opContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};
ExprUnary_opContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterExprUnary_op(this);
	}
};

ExprUnary_opContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitExprUnary_op(this);
	}
};

ExprUnary_opContext.prototype.accept = function(visitor) {
    if ( visitor instanceof lilu_grammarVisitor ) {
        return visitor.visitExprUnary_op(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ExprExprEqualNotequalLeGeContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ExprExprEqualNotequalLeGeContext.prototype = Object.create(ExprContext.prototype);
ExprExprEqualNotequalLeGeContext.prototype.constructor = ExprExprEqualNotequalLeGeContext;

lilu_grammarParser.ExprExprEqualNotequalLeGeContext = ExprExprEqualNotequalLeGeContext;

ExprExprEqualNotequalLeGeContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

ExprExprEqualNotequalLeGeContext.prototype.EQUAL = function() {
    return this.getToken(lilu_grammarParser.EQUAL, 0);
};

ExprExprEqualNotequalLeGeContext.prototype.NOTEQUAL = function() {
    return this.getToken(lilu_grammarParser.NOTEQUAL, 0);
};

ExprExprEqualNotequalLeGeContext.prototype.LE = function() {
    return this.getToken(lilu_grammarParser.LE, 0);
};

ExprExprEqualNotequalLeGeContext.prototype.GE = function() {
    return this.getToken(lilu_grammarParser.GE, 0);
};
ExprExprEqualNotequalLeGeContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterExprExprEqualNotequalLeGe(this);
	}
};

ExprExprEqualNotequalLeGeContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitExprExprEqualNotequalLeGe(this);
	}
};

ExprExprEqualNotequalLeGeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof lilu_grammarVisitor ) {
        return visitor.visitExprExprEqualNotequalLeGe(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ExprExprAndContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ExprExprAndContext.prototype = Object.create(ExprContext.prototype);
ExprExprAndContext.prototype.constructor = ExprExprAndContext;

lilu_grammarParser.ExprExprAndContext = ExprExprAndContext;

ExprExprAndContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

ExprExprAndContext.prototype.AND = function() {
    return this.getToken(lilu_grammarParser.AND, 0);
};
ExprExprAndContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterExprExprAnd(this);
	}
};

ExprExprAndContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitExprExprAnd(this);
	}
};

ExprExprAndContext.prototype.accept = function(visitor) {
    if ( visitor instanceof lilu_grammarVisitor ) {
        return visitor.visitExprExprAnd(this);
    } else {
        return visitor.visitChildren(this);
    }
};



lilu_grammarParser.prototype.expr = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 42;
    this.enterRecursionRule(localctx, 42, lilu_grammarParser.RULE_expr, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 348;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case lilu_grammarParser.BANG:
        case lilu_grammarParser.TILDE:
        case lilu_grammarParser.SUB:
            localctx = new ExprUnary_opContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 331;
            this.unary_op();
            this.state = 332;
            this.expr(11);
            break;
        case lilu_grammarParser.ALLOCATE:
        case lilu_grammarParser.NIL:
        case lilu_grammarParser.READ:
        case lilu_grammarParser.SUPER:
        case lilu_grammarParser.THIS:
        case lilu_grammarParser.WRITE:
        case lilu_grammarParser.REAL_CONST:
        case lilu_grammarParser.HEX_CONST:
        case lilu_grammarParser.INT_CONST:
        case lilu_grammarParser.BOOL_CONST:
        case lilu_grammarParser.STRING_CONST:
        case lilu_grammarParser.LPAREN:
        case lilu_grammarParser.LBRACK:
        case lilu_grammarParser.ID:
            localctx = new ExprParenContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 346;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,36,this._ctx);
            switch(la_) {
            case 1:
                this.state = 334;
                this.match(lilu_grammarParser.LPAREN);
                this.state = 335;
                this.expr(0);
                this.state = 336;
                this.match(lilu_grammarParser.RPAREN);
                break;

            case 2:
                this.state = 338;
                this.match(lilu_grammarParser.ID);
                break;

            case 3:
                this.state = 339;
                this.const_val();
                break;

            case 4:
                this.state = 340;
                this.match(lilu_grammarParser.ALLOCATE);
                this.state = 341;
                this.handle_call();
                break;

            case 5:
                this.state = 342;
                this.func_call();
                break;

            case 6:
                this.state = 343;
                this.variable();
                break;

            case 7:
                this.state = 344;
                this.list();
                break;

            case 8:
                this.state = 345;
                this.match(lilu_grammarParser.NIL);
                break;

            }
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 379;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,39,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 377;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,38,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new ExprExprMulDivModContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, lilu_grammarParser.RULE_expr);
                    this.state = 350;
                    if (!( this.precpred(this._ctx, 10))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
                    }
                    this.state = 351;
                    _la = this._input.LA(1);
                    if(!(((((_la - 59)) & ~0x1f) == 0 && ((1 << (_la - 59)) & ((1 << (lilu_grammarParser.MUL - 59)) | (1 << (lilu_grammarParser.DIV - 59)) | (1 << (lilu_grammarParser.MOD - 59)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 352;
                    this.expr(11);
                    break;

                case 2:
                    localctx = new ExprExprAddSubContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, lilu_grammarParser.RULE_expr);
                    this.state = 353;
                    if (!( this.precpred(this._ctx, 9))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                    }
                    this.state = 354;
                    _la = this._input.LA(1);
                    if(!(_la===lilu_grammarParser.ADD || _la===lilu_grammarParser.SUB)) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 355;
                    this.expr(10);
                    break;

                case 3:
                    localctx = new ExprExprLtGtContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, lilu_grammarParser.RULE_expr);
                    this.state = 356;
                    if (!( this.precpred(this._ctx, 8))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                    }
                    this.state = 357;
                    _la = this._input.LA(1);
                    if(!(_la===lilu_grammarParser.GT || _la===lilu_grammarParser.LT)) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 358;
                    this.expr(9);
                    break;

                case 4:
                    localctx = new ExprExprEqualNotequalLeGeContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, lilu_grammarParser.RULE_expr);
                    this.state = 359;
                    if (!( this.precpred(this._ctx, 7))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                    }
                    this.state = 360;
                    _la = this._input.LA(1);
                    if(!(((((_la - 51)) & ~0x1f) == 0 && ((1 << (_la - 51)) & ((1 << (lilu_grammarParser.EQUAL - 51)) | (1 << (lilu_grammarParser.LE - 51)) | (1 << (lilu_grammarParser.GE - 51)) | (1 << (lilu_grammarParser.NOTEQUAL - 51)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 361;
                    this.expr(8);
                    break;

                case 5:
                    localctx = new ExprExprBitandContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, lilu_grammarParser.RULE_expr);
                    this.state = 362;
                    if (!( this.precpred(this._ctx, 6))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                    }
                    this.state = 363;
                    this.match(lilu_grammarParser.BITAND);
                    this.state = 364;
                    this.expr(7);
                    break;

                case 6:
                    localctx = new ExprExprCaretContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, lilu_grammarParser.RULE_expr);
                    this.state = 365;
                    if (!( this.precpred(this._ctx, 5))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                    }
                    this.state = 366;
                    this.match(lilu_grammarParser.CARET);
                    this.state = 367;
                    this.expr(6);
                    break;

                case 7:
                    localctx = new ExprExprBitorContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, lilu_grammarParser.RULE_expr);
                    this.state = 368;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 369;
                    this.match(lilu_grammarParser.BITOR);
                    this.state = 370;
                    this.expr(5);
                    break;

                case 8:
                    localctx = new ExprExprAndContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, lilu_grammarParser.RULE_expr);
                    this.state = 371;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 372;
                    this.match(lilu_grammarParser.AND);
                    this.state = 373;
                    this.expr(4);
                    break;

                case 9:
                    localctx = new ExprExprOrContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, lilu_grammarParser.RULE_expr);
                    this.state = 374;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 375;
                    this.match(lilu_grammarParser.OR);
                    this.state = 376;
                    this.expr(3);
                    break;

                } 
            }
            this.state = 381;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,39,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function Fun_defContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = lilu_grammarParser.RULE_fun_def;
    return this;
}

Fun_defContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Fun_defContext.prototype.constructor = Fun_defContext;

Fun_defContext.prototype.FUNCTION = function() {
    return this.getToken(lilu_grammarParser.FUNCTION, 0);
};

Fun_defContext.prototype.ID = function() {
    return this.getToken(lilu_grammarParser.ID, 0);
};

Fun_defContext.prototype.LPAREN = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(lilu_grammarParser.LPAREN);
    } else {
        return this.getToken(lilu_grammarParser.LPAREN, i);
    }
};


Fun_defContext.prototype.RPAREN = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(lilu_grammarParser.RPAREN);
    } else {
        return this.getToken(lilu_grammarParser.RPAREN, i);
    }
};


Fun_defContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

Fun_defContext.prototype.args_variable = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Args_variableContext);
    } else {
        return this.getTypedRuleContext(Args_variableContext,i);
    }
};

Fun_defContext.prototype.ASSIGN = function() {
    return this.getToken(lilu_grammarParser.ASSIGN, 0);
};

Fun_defContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterFun_def(this);
	}
};

Fun_defContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitFun_def(this);
	}
};

Fun_defContext.prototype.accept = function(visitor) {
    if ( visitor instanceof lilu_grammarVisitor ) {
        return visitor.visitFun_def(this);
    } else {
        return visitor.visitChildren(this);
    }
};




lilu_grammarParser.Fun_defContext = Fun_defContext;

lilu_grammarParser.prototype.fun_def = function() {

    var localctx = new Fun_defContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, lilu_grammarParser.RULE_fun_def);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 387;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===lilu_grammarParser.LPAREN) {
            this.state = 382;
            this.match(lilu_grammarParser.LPAREN);
            this.state = 383;
            this.args_variable(0);
            this.state = 384;
            this.match(lilu_grammarParser.RPAREN);
            this.state = 385;
            this.match(lilu_grammarParser.ASSIGN);
        }

        this.state = 389;
        this.match(lilu_grammarParser.FUNCTION);
        this.state = 390;
        this.match(lilu_grammarParser.ID);
        this.state = 391;
        this.match(lilu_grammarParser.LPAREN);
        this.state = 393;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << lilu_grammarParser.BOOL) | (1 << lilu_grammarParser.FLOAT) | (1 << lilu_grammarParser.INT) | (1 << lilu_grammarParser.STRING))) !== 0) || _la===lilu_grammarParser.ID) {
            this.state = 392;
            this.args_variable(0);
        }

        this.state = 395;
        this.match(lilu_grammarParser.RPAREN);
        this.state = 396;
        this.block();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Access_modifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = lilu_grammarParser.RULE_access_modifier;
    return this;
}

Access_modifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Access_modifierContext.prototype.constructor = Access_modifierContext;

Access_modifierContext.prototype.PRIVATE = function() {
    return this.getToken(lilu_grammarParser.PRIVATE, 0);
};

Access_modifierContext.prototype.PUBLIC = function() {
    return this.getToken(lilu_grammarParser.PUBLIC, 0);
};

Access_modifierContext.prototype.PROTECTED = function() {
    return this.getToken(lilu_grammarParser.PROTECTED, 0);
};

Access_modifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterAccess_modifier(this);
	}
};

Access_modifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitAccess_modifier(this);
	}
};

Access_modifierContext.prototype.accept = function(visitor) {
    if ( visitor instanceof lilu_grammarVisitor ) {
        return visitor.visitAccess_modifier(this);
    } else {
        return visitor.visitChildren(this);
    }
};




lilu_grammarParser.Access_modifierContext = Access_modifierContext;

lilu_grammarParser.prototype.access_modifier = function() {

    var localctx = new Access_modifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, lilu_grammarParser.RULE_access_modifier);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 398;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << lilu_grammarParser.PRIVATE) | (1 << lilu_grammarParser.PROTECTED) | (1 << lilu_grammarParser.PUBLIC))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ComponentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = lilu_grammarParser.RULE_component;
    return this;
}

ComponentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ComponentContext.prototype.constructor = ComponentContext;

ComponentContext.prototype.variable_def = function() {
    return this.getTypedRuleContext(Variable_defContext,0);
};

ComponentContext.prototype.fun_def = function() {
    return this.getTypedRuleContext(Fun_defContext,0);
};

ComponentContext.prototype.access_modifier = function() {
    return this.getTypedRuleContext(Access_modifierContext,0);
};

ComponentContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterComponent(this);
	}
};

ComponentContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitComponent(this);
	}
};

ComponentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof lilu_grammarVisitor ) {
        return visitor.visitComponent(this);
    } else {
        return visitor.visitChildren(this);
    }
};




lilu_grammarParser.ComponentContext = ComponentContext;

lilu_grammarParser.prototype.component = function() {

    var localctx = new ComponentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, lilu_grammarParser.RULE_component);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 401;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << lilu_grammarParser.PRIVATE) | (1 << lilu_grammarParser.PROTECTED) | (1 << lilu_grammarParser.PUBLIC))) !== 0)) {
            this.state = 400;
            this.access_modifier();
        }

        this.state = 405;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case lilu_grammarParser.BOOL:
        case lilu_grammarParser.CONST:
        case lilu_grammarParser.FLOAT:
        case lilu_grammarParser.INT:
        case lilu_grammarParser.STRING:
        case lilu_grammarParser.ID:
            this.state = 403;
            this.variable_def();
            break;
        case lilu_grammarParser.FUNCTION:
        case lilu_grammarParser.LPAREN:
            this.state = 404;
            this.fun_def();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Type_defContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = lilu_grammarParser.RULE_type_def;
    return this;
}

Type_defContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Type_defContext.prototype.constructor = Type_defContext;

Type_defContext.prototype.TYPE = function() {
    return this.getToken(lilu_grammarParser.TYPE, 0);
};

Type_defContext.prototype.ID = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(lilu_grammarParser.ID);
    } else {
        return this.getToken(lilu_grammarParser.ID, i);
    }
};


Type_defContext.prototype.LBRACE = function() {
    return this.getToken(lilu_grammarParser.LBRACE, 0);
};

Type_defContext.prototype.RBRACE = function() {
    return this.getToken(lilu_grammarParser.RBRACE, 0);
};

Type_defContext.prototype.COLON = function() {
    return this.getToken(lilu_grammarParser.COLON, 0);
};

Type_defContext.prototype.component = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ComponentContext);
    } else {
        return this.getTypedRuleContext(ComponentContext,i);
    }
};

Type_defContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterType_def(this);
	}
};

Type_defContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitType_def(this);
	}
};

Type_defContext.prototype.accept = function(visitor) {
    if ( visitor instanceof lilu_grammarVisitor ) {
        return visitor.visitType_def(this);
    } else {
        return visitor.visitChildren(this);
    }
};




lilu_grammarParser.Type_defContext = Type_defContext;

lilu_grammarParser.prototype.type_def = function() {

    var localctx = new Type_defContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, lilu_grammarParser.RULE_type_def);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 407;
        this.match(lilu_grammarParser.TYPE);
        this.state = 408;
        this.match(lilu_grammarParser.ID);
        this.state = 411;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===lilu_grammarParser.COLON) {
            this.state = 409;
            this.match(lilu_grammarParser.COLON);
            this.state = 410;
            this.match(lilu_grammarParser.ID);
        }

        this.state = 413;
        this.match(lilu_grammarParser.LBRACE);
        this.state = 415; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 414;
            this.component();
            this.state = 417; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << lilu_grammarParser.BOOL) | (1 << lilu_grammarParser.CONST) | (1 << lilu_grammarParser.FLOAT) | (1 << lilu_grammarParser.INT) | (1 << lilu_grammarParser.PRIVATE) | (1 << lilu_grammarParser.PROTECTED) | (1 << lilu_grammarParser.PUBLIC) | (1 << lilu_grammarParser.STRING))) !== 0) || ((((_la - 34)) & ~0x1f) == 0 && ((1 << (_la - 34)) & ((1 << (lilu_grammarParser.FUNCTION - 34)) | (1 << (lilu_grammarParser.LPAREN - 34)) | (1 << (lilu_grammarParser.ID - 34)))) !== 0));
        this.state = 419;
        this.match(lilu_grammarParser.RBRACE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Ft_defContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = lilu_grammarParser.RULE_ft_def;
    return this;
}

Ft_defContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Ft_defContext.prototype.constructor = Ft_defContext;


 
Ft_defContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function Ft_defFunContext(parser, ctx) {
	Ft_defContext.call(this, parser);
    Ft_defContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Ft_defFunContext.prototype = Object.create(Ft_defContext.prototype);
Ft_defFunContext.prototype.constructor = Ft_defFunContext;

lilu_grammarParser.Ft_defFunContext = Ft_defFunContext;

Ft_defFunContext.prototype.fun_def = function() {
    return this.getTypedRuleContext(Fun_defContext,0);
};
Ft_defFunContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterFt_defFun(this);
	}
};

Ft_defFunContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitFt_defFun(this);
	}
};

Ft_defFunContext.prototype.accept = function(visitor) {
    if ( visitor instanceof lilu_grammarVisitor ) {
        return visitor.visitFt_defFun(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function Ft_defTypeContext(parser, ctx) {
	Ft_defContext.call(this, parser);
    Ft_defContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Ft_defTypeContext.prototype = Object.create(Ft_defContext.prototype);
Ft_defTypeContext.prototype.constructor = Ft_defTypeContext;

lilu_grammarParser.Ft_defTypeContext = Ft_defTypeContext;

Ft_defTypeContext.prototype.type_def = function() {
    return this.getTypedRuleContext(Type_defContext,0);
};
Ft_defTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterFt_defType(this);
	}
};

Ft_defTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitFt_defType(this);
	}
};

Ft_defTypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof lilu_grammarVisitor ) {
        return visitor.visitFt_defType(this);
    } else {
        return visitor.visitChildren(this);
    }
};



lilu_grammarParser.Ft_defContext = Ft_defContext;

lilu_grammarParser.prototype.ft_def = function() {

    var localctx = new Ft_defContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, lilu_grammarParser.RULE_ft_def);
    try {
        this.state = 423;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case lilu_grammarParser.TYPE:
            localctx = new Ft_defTypeContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 421;
            this.type_def();
            break;
        case lilu_grammarParser.FUNCTION:
        case lilu_grammarParser.LPAREN:
            localctx = new Ft_defFunContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 422;
            this.fun_def();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = lilu_grammarParser.RULE_def;
    return this;
}

DefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DefContext.prototype.constructor = DefContext;

DefContext.prototype.ft_def = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Ft_defContext);
    } else {
        return this.getTypedRuleContext(Ft_defContext,i);
    }
};

DefContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterDef(this);
	}
};

DefContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitDef(this);
	}
};

DefContext.prototype.accept = function(visitor) {
    if ( visitor instanceof lilu_grammarVisitor ) {
        return visitor.visitDef(this);
    } else {
        return visitor.visitChildren(this);
    }
};




lilu_grammarParser.DefContext = DefContext;

lilu_grammarParser.prototype.def = function() {

    var localctx = new DefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, lilu_grammarParser.RULE_def);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 426; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 425;
            this.ft_def();
            this.state = 428; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(((((_la - 31)) & ~0x1f) == 0 && ((1 << (_la - 31)) & ((1 << (lilu_grammarParser.TYPE - 31)) | (1 << (lilu_grammarParser.FUNCTION - 31)) | (1 << (lilu_grammarParser.LPAREN - 31)))) !== 0));
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AssignContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = lilu_grammarParser.RULE_assign;
    return this;
}

AssignContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AssignContext.prototype.constructor = AssignContext;

AssignContext.prototype.ASSIGN = function() {
    return this.getToken(lilu_grammarParser.ASSIGN, 0);
};

AssignContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

AssignContext.prototype.variable = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(VariableContext);
    } else {
        return this.getTypedRuleContext(VariableContext,i);
    }
};

AssignContext.prototype.LPAREN = function() {
    return this.getToken(lilu_grammarParser.LPAREN, 0);
};

AssignContext.prototype.RPAREN = function() {
    return this.getToken(lilu_grammarParser.RPAREN, 0);
};

AssignContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(lilu_grammarParser.COMMA);
    } else {
        return this.getToken(lilu_grammarParser.COMMA, i);
    }
};


AssignContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterAssign(this);
	}
};

AssignContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitAssign(this);
	}
};

AssignContext.prototype.accept = function(visitor) {
    if ( visitor instanceof lilu_grammarVisitor ) {
        return visitor.visitAssign(this);
    } else {
        return visitor.visitChildren(this);
    }
};




lilu_grammarParser.AssignContext = AssignContext;

lilu_grammarParser.prototype.assign = function() {

    var localctx = new AssignContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, lilu_grammarParser.RULE_assign);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 442;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case lilu_grammarParser.SUPER:
        case lilu_grammarParser.THIS:
        case lilu_grammarParser.ID:
            this.state = 430;
            this.variable();
            break;
        case lilu_grammarParser.LPAREN:
            this.state = 431;
            this.match(lilu_grammarParser.LPAREN);
            this.state = 432;
            this.variable();
            this.state = 437;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===lilu_grammarParser.COMMA) {
                this.state = 433;
                this.match(lilu_grammarParser.COMMA);
                this.state = 434;
                this.variable();
                this.state = 439;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 440;
            this.match(lilu_grammarParser.RPAREN);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 444;
        this.match(lilu_grammarParser.ASSIGN);
        this.state = 445;
        this.expr(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Unary_opContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = lilu_grammarParser.RULE_unary_op;
    return this;
}

Unary_opContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Unary_opContext.prototype.constructor = Unary_opContext;

Unary_opContext.prototype.SUB = function() {
    return this.getToken(lilu_grammarParser.SUB, 0);
};

Unary_opContext.prototype.BANG = function() {
    return this.getToken(lilu_grammarParser.BANG, 0);
};

Unary_opContext.prototype.TILDE = function() {
    return this.getToken(lilu_grammarParser.TILDE, 0);
};

Unary_opContext.prototype.enterRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.enterUnary_op(this);
	}
};

Unary_opContext.prototype.exitRule = function(listener) {
    if(listener instanceof lilu_grammarListener ) {
        listener.exitUnary_op(this);
	}
};

Unary_opContext.prototype.accept = function(visitor) {
    if ( visitor instanceof lilu_grammarVisitor ) {
        return visitor.visitUnary_op(this);
    } else {
        return visitor.visitChildren(this);
    }
};




lilu_grammarParser.Unary_opContext = Unary_opContext;

lilu_grammarParser.prototype.unary_op = function() {

    var localctx = new Unary_opContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, lilu_grammarParser.RULE_unary_op);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 447;
        _la = this._input.LA(1);
        if(!(_la===lilu_grammarParser.BANG || _la===lilu_grammarParser.TILDE || _la===lilu_grammarParser.SUB)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


lilu_grammarParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 7:
			return this.args_sempred(localctx, predIndex);
	case 8:
			return this.args_variable_sempred(localctx, predIndex);
	case 21:
			return this.expr_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

lilu_grammarParser.prototype.args_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

lilu_grammarParser.prototype.args_variable_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 1:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

lilu_grammarParser.prototype.expr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 2:
			return this.precpred(this._ctx, 10);
		case 3:
			return this.precpred(this._ctx, 9);
		case 4:
			return this.precpred(this._ctx, 8);
		case 5:
			return this.precpred(this._ctx, 7);
		case 6:
			return this.precpred(this._ctx, 6);
		case 7:
			return this.precpred(this._ctx, 5);
		case 8:
			return this.precpred(this._ctx, 4);
		case 9:
			return this.precpred(this._ctx, 3);
		case 10:
			return this.precpred(this._ctx, 2);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.lilu_grammarParser = lilu_grammarParser;
