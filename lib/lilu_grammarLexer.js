// Generated from grammar/lilu_grammar.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002G\u0209\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017",
    "\t\u0017\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a",
    "\u0004\u001b\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e",
    "\t\u001e\u0004\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#",
    "\t#\u0004$\t$\u0004%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004",
    "*\t*\u0004+\t+\u0004,\t,\u0004-\t-\u0004.\t.\u0004/\t/\u00040\t0\u0004",
    "1\t1\u00042\t2\u00043\t3\u00044\t4\u00045\t5\u00046\t6\u00047\t7\u0004",
    "8\t8\u00049\t9\u0004:\t:\u0004;\t;\u0004<\t<\u0004=\t=\u0004>\t>\u0004",
    "?\t?\u0004@\t@\u0004A\tA\u0004B\tB\u0004C\tC\u0004D\tD\u0004E\tE\u0004",
    "F\tF\u0004G\tG\u0004H\tH\u0004I\tI\u0004J\tJ\u0004K\tK\u0003\u0002\u0003",
    "\u0002\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0005\u0003",
    "\u0005\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\r\u0003",
    "\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0003",
    "\u0012\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003",
    "\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003",
    "\u0016\u0003\u0016\u0003\u0016\u0003\u0017\u0003\u0017\u0003\u0017\u0003",
    "\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0018\u0003",
    "\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003",
    "\u0018\u0003\u0018\u0003\u0018\u0003\u0019\u0003\u0019\u0003\u0019\u0003",
    "\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u001a\u0003\u001a\u0003",
    "\u001a\u0003\u001a\u0003\u001a\u0003\u001b\u0003\u001b\u0003\u001b\u0003",
    "\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001c\u0003\u001c\u0003",
    "\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001d\u0003",
    "\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001e\u0003",
    "\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003",
    "\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003 \u0003",
    " \u0003 \u0003 \u0003 \u0003!\u0003!\u0003!\u0003!\u0003!\u0003!\u0003",
    "\"\u0003\"\u0003\"\u0003\"\u0003\"\u0003\"\u0003#\u0003#\u0003#\u0003",
    "#\u0003#\u0003#\u0003#\u0003#\u0003#\u0003$\u0003$\u0005$\u015a\n$\u0003",
    "$\u0003$\u0003$\u0005$\u015f\n$\u0005$\u0161\n$\u0003$\u0003$\u0003",
    "$\u0005$\u0166\n$\u0005$\u0168\n$\u0003%\u0003%\u0005%\u016c\n%\u0003",
    "%\u0006%\u016f\n%\r%\u000e%\u0170\u0003&\u0003&\u0003&\u0006&\u0176",
    "\n&\r&\u000e&\u0177\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003(\u0003",
    "(\u0003)\u0006)\u0182\n)\r)\u000e)\u0183\u0003*\u0003*\u0003+\u0003",
    "+\u0003+\u0003+\u0003+\u0003+\u0003+\u0003+\u0003+\u0005+\u0191\n+\u0003",
    ",\u0003,\u0003,\u0003,\u0007,\u0197\n,\f,\u000e,\u019a\u000b,\u0003",
    ",\u0003,\u0003-\u0003-\u0003-\u0003.\u0003.\u0003/\u0003/\u00030\u0003",
    "0\u00031\u00031\u00032\u00032\u00033\u00033\u00034\u00034\u00035\u0003",
    "5\u00036\u00036\u00037\u00037\u00038\u00038\u00038\u00039\u00039\u0003",
    "9\u0003:\u0003:\u0003:\u0003;\u0003;\u0003;\u0003<\u0003<\u0003<\u0003",
    "=\u0003=\u0003=\u0003>\u0003>\u0003?\u0003?\u0003@\u0003@\u0003A\u0003",
    "A\u0003B\u0003B\u0003C\u0003C\u0003D\u0003D\u0003E\u0003E\u0003F\u0003",
    "F\u0003F\u0007F\u01da\nF\fF\u000eF\u01dd\u000bF\u0003G\u0003G\u0003",
    "H\u0006H\u01e2\nH\rH\u000eH\u01e3\u0003H\u0003H\u0003I\u0003I\u0005",
    "I\u01ea\nI\u0003I\u0005I\u01ed\nI\u0003I\u0003I\u0003J\u0003J\u0003",
    "J\u0003J\u0007J\u01f5\nJ\fJ\u000eJ\u01f8\u000bJ\u0003J\u0003J\u0003",
    "J\u0003J\u0003J\u0003K\u0003K\u0003K\u0003K\u0007K\u0203\nK\fK\u000e",
    "K\u0206\u000bK\u0003K\u0003K\u0003\u01f6\u0002L\u0003\u0003\u0005\u0004",
    "\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f\t\u0011\n\u0013\u000b\u0015",
    "\f\u0017\r\u0019\u000e\u001b\u000f\u001d\u0010\u001f\u0011!\u0012#\u0013",
    "%\u0014\'\u0015)\u0016+\u0017-\u0018/\u00191\u001a3\u001b5\u001c7\u001d",
    "9\u001e;\u001f= ?!A\"C#E$G%I\u0002K&M\'O\u0002Q(S\u0002U)W*Y\u0002[",
    "+],_-a.c/e0g1i2k3m4o5q6s7u8w9y:{;}<\u007f=\u0081>\u0083?\u0085@\u0087",
    "A\u0089B\u008bC\u008d\u0002\u008fD\u0091E\u0093F\u0095G\u0003\u0002",
    "\f\u0004\u0002GGgg\u0004\u0002--//\u0004\u0002ZZzz\u0005\u00022;CHc",
    "h\u0003\u00022;\u0004\u0002))^^\b\u0002))22^^ppttvv\u0006\u0002%%C\\",
    "aac|\u0004\u0002\u000b\u000b\"\"\u0004\u0002\f\f\u000f\u000f\u0002\u0217",
    "\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002",
    "\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002",
    "\u0002\u000b\u0003\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002\u0002",
    "\u0002\u000f\u0003\u0002\u0002\u0002\u0002\u0011\u0003\u0002\u0002\u0002",
    "\u0002\u0013\u0003\u0002\u0002\u0002\u0002\u0015\u0003\u0002\u0002\u0002",
    "\u0002\u0017\u0003\u0002\u0002\u0002\u0002\u0019\u0003\u0002\u0002\u0002",
    "\u0002\u001b\u0003\u0002\u0002\u0002\u0002\u001d\u0003\u0002\u0002\u0002",
    "\u0002\u001f\u0003\u0002\u0002\u0002\u0002!\u0003\u0002\u0002\u0002",
    "\u0002#\u0003\u0002\u0002\u0002\u0002%\u0003\u0002\u0002\u0002\u0002",
    "\'\u0003\u0002\u0002\u0002\u0002)\u0003\u0002\u0002\u0002\u0002+\u0003",
    "\u0002\u0002\u0002\u0002-\u0003\u0002\u0002\u0002\u0002/\u0003\u0002",
    "\u0002\u0002\u00021\u0003\u0002\u0002\u0002\u00023\u0003\u0002\u0002",
    "\u0002\u00025\u0003\u0002\u0002\u0002\u00027\u0003\u0002\u0002\u0002",
    "\u00029\u0003\u0002\u0002\u0002\u0002;\u0003\u0002\u0002\u0002\u0002",
    "=\u0003\u0002\u0002\u0002\u0002?\u0003\u0002\u0002\u0002\u0002A\u0003",
    "\u0002\u0002\u0002\u0002C\u0003\u0002\u0002\u0002\u0002E\u0003\u0002",
    "\u0002\u0002\u0002G\u0003\u0002\u0002\u0002\u0002K\u0003\u0002\u0002",
    "\u0002\u0002M\u0003\u0002\u0002\u0002\u0002Q\u0003\u0002\u0002\u0002",
    "\u0002U\u0003\u0002\u0002\u0002\u0002W\u0003\u0002\u0002\u0002\u0002",
    "[\u0003\u0002\u0002\u0002\u0002]\u0003\u0002\u0002\u0002\u0002_\u0003",
    "\u0002\u0002\u0002\u0002a\u0003\u0002\u0002\u0002\u0002c\u0003\u0002",
    "\u0002\u0002\u0002e\u0003\u0002\u0002\u0002\u0002g\u0003\u0002\u0002",
    "\u0002\u0002i\u0003\u0002\u0002\u0002\u0002k\u0003\u0002\u0002\u0002",
    "\u0002m\u0003\u0002\u0002\u0002\u0002o\u0003\u0002\u0002\u0002\u0002",
    "q\u0003\u0002\u0002\u0002\u0002s\u0003\u0002\u0002\u0002\u0002u\u0003",
    "\u0002\u0002\u0002\u0002w\u0003\u0002\u0002\u0002\u0002y\u0003\u0002",
    "\u0002\u0002\u0002{\u0003\u0002\u0002\u0002\u0002}\u0003\u0002\u0002",
    "\u0002\u0002\u007f\u0003\u0002\u0002\u0002\u0002\u0081\u0003\u0002\u0002",
    "\u0002\u0002\u0083\u0003\u0002\u0002\u0002\u0002\u0085\u0003\u0002\u0002",
    "\u0002\u0002\u0087\u0003\u0002\u0002\u0002\u0002\u0089\u0003\u0002\u0002",
    "\u0002\u0002\u008b\u0003\u0002\u0002\u0002\u0002\u008f\u0003\u0002\u0002",
    "\u0002\u0002\u0091\u0003\u0002\u0002\u0002\u0002\u0093\u0003\u0002\u0002",
    "\u0002\u0002\u0095\u0003\u0002\u0002\u0002\u0003\u0097\u0003\u0002\u0002",
    "\u0002\u0005\u0099\u0003\u0002\u0002\u0002\u0007\u009b\u0003\u0002\u0002",
    "\u0002\t\u009d\u0003\u0002\u0002\u0002\u000b\u009f\u0003\u0002\u0002",
    "\u0002\r\u00a1\u0003\u0002\u0002\u0002\u000f\u00aa\u0003\u0002\u0002",
    "\u0002\u0011\u00af\u0003\u0002\u0002\u0002\u0013\u00b5\u0003\u0002\u0002",
    "\u0002\u0015\u00ba\u0003\u0002\u0002\u0002\u0017\u00c0\u0003\u0002\u0002",
    "\u0002\u0019\u00c9\u0003\u0002\u0002\u0002\u001b\u00d1\u0003\u0002\u0002",
    "\u0002\u001d\u00d9\u0003\u0002\u0002\u0002\u001f\u00e2\u0003\u0002\u0002",
    "\u0002!\u00e7\u0003\u0002\u0002\u0002#\u00ed\u0003\u0002\u0002\u0002",
    "%\u00f1\u0003\u0002\u0002\u0002\'\u00f4\u0003\u0002\u0002\u0002)\u00f8",
    "\u0003\u0002\u0002\u0002+\u00fc\u0003\u0002\u0002\u0002-\u00ff\u0003",
    "\u0002\u0002\u0002/\u0107\u0003\u0002\u0002\u00021\u0111\u0003\u0002",
    "\u0002\u00023\u0118\u0003\u0002\u0002\u00025\u011d\u0003\u0002\u0002",
    "\u00027\u0124\u0003\u0002\u0002\u00029\u012b\u0003\u0002\u0002\u0002",
    ";\u0131\u0003\u0002\u0002\u0002=\u0138\u0003\u0002\u0002\u0002?\u013d",
    "\u0003\u0002\u0002\u0002A\u0142\u0003\u0002\u0002\u0002C\u0148\u0003",
    "\u0002\u0002\u0002E\u014e\u0003\u0002\u0002\u0002G\u0167\u0003\u0002",
    "\u0002\u0002I\u0169\u0003\u0002\u0002\u0002K\u0172\u0003\u0002\u0002",
    "\u0002M\u0179\u0003\u0002\u0002\u0002O\u017e\u0003\u0002\u0002\u0002",
    "Q\u0181\u0003\u0002\u0002\u0002S\u0185\u0003\u0002\u0002\u0002U\u0190",
    "\u0003\u0002\u0002\u0002W\u0192\u0003\u0002\u0002\u0002Y\u019d\u0003",
    "\u0002\u0002\u0002[\u01a0\u0003\u0002\u0002\u0002]\u01a2\u0003\u0002",
    "\u0002\u0002_\u01a4\u0003\u0002\u0002\u0002a\u01a6\u0003\u0002\u0002",
    "\u0002c\u01a8\u0003\u0002\u0002\u0002e\u01aa\u0003\u0002\u0002\u0002",
    "g\u01ac\u0003\u0002\u0002\u0002i\u01ae\u0003\u0002\u0002\u0002k\u01b0",
    "\u0003\u0002\u0002\u0002m\u01b2\u0003\u0002\u0002\u0002o\u01b4\u0003",
    "\u0002\u0002\u0002q\u01b7\u0003\u0002\u0002\u0002s\u01ba\u0003\u0002",
    "\u0002\u0002u\u01bd\u0003\u0002\u0002\u0002w\u01c0\u0003\u0002\u0002",
    "\u0002y\u01c3\u0003\u0002\u0002\u0002{\u01c6\u0003\u0002\u0002\u0002",
    "}\u01c8\u0003\u0002\u0002\u0002\u007f\u01ca\u0003\u0002\u0002\u0002",
    "\u0081\u01cc\u0003\u0002\u0002\u0002\u0083\u01ce\u0003\u0002\u0002\u0002",
    "\u0085\u01d0\u0003\u0002\u0002\u0002\u0087\u01d2\u0003\u0002\u0002\u0002",
    "\u0089\u01d4\u0003\u0002\u0002\u0002\u008b\u01d6\u0003\u0002\u0002\u0002",
    "\u008d\u01de\u0003\u0002\u0002\u0002\u008f\u01e1\u0003\u0002\u0002\u0002",
    "\u0091\u01ec\u0003\u0002\u0002\u0002\u0093\u01f0\u0003\u0002\u0002\u0002",
    "\u0095\u01fe\u0003\u0002\u0002\u0002\u0097\u0098\u0007?\u0002\u0002",
    "\u0098\u0004\u0003\u0002\u0002\u0002\u0099\u009a\u0007@\u0002\u0002",
    "\u009a\u0006\u0003\u0002\u0002\u0002\u009b\u009c\u0007>\u0002\u0002",
    "\u009c\b\u0003\u0002\u0002\u0002\u009d\u009e\u0007#\u0002\u0002\u009e",
    "\n\u0003\u0002\u0002\u0002\u009f\u00a0\u0007\u0080\u0002\u0002\u00a0",
    "\f\u0003\u0002\u0002\u0002\u00a1\u00a2\u0007c\u0002\u0002\u00a2\u00a3",
    "\u0007n\u0002\u0002\u00a3\u00a4\u0007n\u0002\u0002\u00a4\u00a5\u0007",
    "q\u0002\u0002\u00a5\u00a6\u0007e\u0002\u0002\u00a6\u00a7\u0007c\u0002",
    "\u0002\u00a7\u00a8\u0007v\u0002\u0002\u00a8\u00a9\u0007g\u0002\u0002",
    "\u00a9\u000e\u0003\u0002\u0002\u0002\u00aa\u00ab\u0007d\u0002\u0002",
    "\u00ab\u00ac\u0007q\u0002\u0002\u00ac\u00ad\u0007q\u0002\u0002\u00ad",
    "\u00ae\u0007n\u0002\u0002\u00ae\u0010\u0003\u0002\u0002\u0002\u00af",
    "\u00b0\u0007d\u0002\u0002\u00b0\u00b1\u0007t\u0002\u0002\u00b1\u00b2",
    "\u0007g\u0002\u0002\u00b2\u00b3\u0007c\u0002\u0002\u00b3\u00b4\u0007",
    "m\u0002\u0002\u00b4\u0012\u0003\u0002\u0002\u0002\u00b5\u00b6\u0007",
    "e\u0002\u0002\u00b6\u00b7\u0007c\u0002\u0002\u00b7\u00b8\u0007u\u0002",
    "\u0002\u00b8\u00b9\u0007g\u0002\u0002\u00b9\u0014\u0003\u0002\u0002",
    "\u0002\u00ba\u00bb\u0007e\u0002\u0002\u00bb\u00bc\u0007q\u0002\u0002",
    "\u00bc\u00bd\u0007p\u0002\u0002\u00bd\u00be\u0007u\u0002\u0002\u00be",
    "\u00bf\u0007v\u0002\u0002\u00bf\u0016\u0003\u0002\u0002\u0002\u00c0",
    "\u00c1\u0007e\u0002\u0002\u00c1\u00c2\u0007q\u0002\u0002\u00c2\u00c3",
    "\u0007p\u0002\u0002\u00c3\u00c4\u0007v\u0002\u0002\u00c4\u00c5\u0007",
    "k\u0002\u0002\u00c5\u00c6\u0007p\u0002\u0002\u00c6\u00c7\u0007w\u0002",
    "\u0002\u00c7\u00c8\u0007g\u0002\u0002\u00c8\u0018\u0003\u0002\u0002",
    "\u0002\u00c9\u00ca\u0007f\u0002\u0002\u00ca\u00cb\u0007g\u0002\u0002",
    "\u00cb\u00cc\u0007e\u0002\u0002\u00cc\u00cd\u0007n\u0002\u0002\u00cd",
    "\u00ce\u0007c\u0002\u0002\u00ce\u00cf\u0007t\u0002\u0002\u00cf\u00d0",
    "\u0007g\u0002\u0002\u00d0\u001a\u0003\u0002\u0002\u0002\u00d1\u00d2",
    "\u0007f\u0002\u0002\u00d2\u00d3\u0007g\u0002\u0002\u00d3\u00d4\u0007",
    "h\u0002\u0002\u00d4\u00d5\u0007c\u0002\u0002\u00d5\u00d6\u0007w\u0002",
    "\u0002\u00d6\u00d7\u0007n\u0002\u0002\u00d7\u00d8\u0007v\u0002\u0002",
    "\u00d8\u001c\u0003\u0002\u0002\u0002\u00d9\u00da\u0007f\u0002\u0002",
    "\u00da\u00db\u0007g\u0002\u0002\u00db\u00dc\u0007u\u0002\u0002\u00dc",
    "\u00dd\u0007v\u0002\u0002\u00dd\u00de\u0007t\u0002\u0002\u00de\u00df",
    "\u0007w\u0002\u0002\u00df\u00e0\u0007e\u0002\u0002\u00e0\u00e1\u0007",
    "v\u0002\u0002\u00e1\u001e\u0003\u0002\u0002\u0002\u00e2\u00e3\u0007",
    "g\u0002\u0002\u00e3\u00e4\u0007n\u0002\u0002\u00e4\u00e5\u0007u\u0002",
    "\u0002\u00e5\u00e6\u0007g\u0002\u0002\u00e6 \u0003\u0002\u0002\u0002",
    "\u00e7\u00e8\u0007h\u0002\u0002\u00e8\u00e9\u0007n\u0002\u0002\u00e9",
    "\u00ea\u0007q\u0002\u0002\u00ea\u00eb\u0007c\u0002\u0002\u00eb\u00ec",
    "\u0007v\u0002\u0002\u00ec\"\u0003\u0002\u0002\u0002\u00ed\u00ee\u0007",
    "h\u0002\u0002\u00ee\u00ef\u0007q\u0002\u0002\u00ef\u00f0\u0007t\u0002",
    "\u0002\u00f0$\u0003\u0002\u0002\u0002\u00f1\u00f2\u0007k\u0002\u0002",
    "\u00f2\u00f3\u0007h\u0002\u0002\u00f3&\u0003\u0002\u0002\u0002\u00f4",
    "\u00f5\u0007k\u0002\u0002\u00f5\u00f6\u0007p\u0002\u0002\u00f6\u00f7",
    "\u0007v\u0002\u0002\u00f7(\u0003\u0002\u0002\u0002\u00f8\u00f9\u0007",
    "p\u0002\u0002\u00f9\u00fa\u0007k\u0002\u0002\u00fa\u00fb\u0007n\u0002",
    "\u0002\u00fb*\u0003\u0002\u0002\u0002\u00fc\u00fd\u0007q\u0002\u0002",
    "\u00fd\u00fe\u0007h\u0002\u0002\u00fe,\u0003\u0002\u0002\u0002\u00ff",
    "\u0100\u0007r\u0002\u0002\u0100\u0101\u0007t\u0002\u0002\u0101\u0102",
    "\u0007k\u0002\u0002\u0102\u0103\u0007x\u0002\u0002\u0103\u0104\u0007",
    "c\u0002\u0002\u0104\u0105\u0007v\u0002\u0002\u0105\u0106\u0007g\u0002",
    "\u0002\u0106.\u0003\u0002\u0002\u0002\u0107\u0108\u0007r\u0002\u0002",
    "\u0108\u0109\u0007t\u0002\u0002\u0109\u010a\u0007q\u0002\u0002\u010a",
    "\u010b\u0007v\u0002\u0002\u010b\u010c\u0007g\u0002\u0002\u010c\u010d",
    "\u0007e\u0002\u0002\u010d\u010e\u0007v\u0002\u0002\u010e\u010f\u0007",
    "g\u0002\u0002\u010f\u0110\u0007f\u0002\u0002\u01100\u0003\u0002\u0002",
    "\u0002\u0111\u0112\u0007r\u0002\u0002\u0112\u0113\u0007w\u0002\u0002",
    "\u0113\u0114\u0007d\u0002\u0002\u0114\u0115\u0007n\u0002\u0002\u0115",
    "\u0116\u0007k\u0002\u0002\u0116\u0117\u0007e\u0002\u0002\u01172\u0003",
    "\u0002\u0002\u0002\u0118\u0119\u0007t\u0002\u0002\u0119\u011a\u0007",
    "g\u0002\u0002\u011a\u011b\u0007c\u0002\u0002\u011b\u011c\u0007f\u0002",
    "\u0002\u011c4\u0003\u0002\u0002\u0002\u011d\u011e\u0007t\u0002\u0002",
    "\u011e\u011f\u0007g\u0002\u0002\u011f\u0120\u0007v\u0002\u0002\u0120",
    "\u0121\u0007w\u0002\u0002\u0121\u0122\u0007t\u0002\u0002\u0122\u0123",
    "\u0007p\u0002\u0002\u01236\u0003\u0002\u0002\u0002\u0124\u0125\u0007",
    "u\u0002\u0002\u0125\u0126\u0007v\u0002\u0002\u0126\u0127\u0007t\u0002",
    "\u0002\u0127\u0128\u0007k\u0002\u0002\u0128\u0129\u0007p\u0002\u0002",
    "\u0129\u012a\u0007i\u0002\u0002\u012a8\u0003\u0002\u0002\u0002\u012b",
    "\u012c\u0007u\u0002\u0002\u012c\u012d\u0007w\u0002\u0002\u012d\u012e",
    "\u0007r\u0002\u0002\u012e\u012f\u0007g\u0002\u0002\u012f\u0130\u0007",
    "t\u0002\u0002\u0130:\u0003\u0002\u0002\u0002\u0131\u0132\u0007u\u0002",
    "\u0002\u0132\u0133\u0007y\u0002\u0002\u0133\u0134\u0007k\u0002\u0002",
    "\u0134\u0135\u0007v\u0002\u0002\u0135\u0136\u0007e\u0002\u0002\u0136",
    "\u0137\u0007j\u0002\u0002\u0137<\u0003\u0002\u0002\u0002\u0138\u0139",
    "\u0007v\u0002\u0002\u0139\u013a\u0007j\u0002\u0002\u013a\u013b\u0007",
    "k\u0002\u0002\u013b\u013c\u0007u\u0002\u0002\u013c>\u0003\u0002\u0002",
    "\u0002\u013d\u013e\u0007v\u0002\u0002\u013e\u013f\u0007{\u0002\u0002",
    "\u013f\u0140\u0007r\u0002\u0002\u0140\u0141\u0007g\u0002\u0002\u0141",
    "@\u0003\u0002\u0002\u0002\u0142\u0143\u0007y\u0002\u0002\u0143\u0144",
    "\u0007j\u0002\u0002\u0144\u0145\u0007k\u0002\u0002\u0145\u0146\u0007",
    "n\u0002\u0002\u0146\u0147\u0007g\u0002\u0002\u0147B\u0003\u0002\u0002",
    "\u0002\u0148\u0149\u0007y\u0002\u0002\u0149\u014a\u0007t\u0002\u0002",
    "\u014a\u014b\u0007k\u0002\u0002\u014b\u014c\u0007v\u0002\u0002\u014c",
    "\u014d\u0007g\u0002\u0002\u014dD\u0003\u0002\u0002\u0002\u014e\u014f",
    "\u0007h\u0002\u0002\u014f\u0150\u0007w\u0002\u0002\u0150\u0151\u0007",
    "p\u0002\u0002\u0151\u0152\u0007e\u0002\u0002\u0152\u0153\u0007v\u0002",
    "\u0002\u0153\u0154\u0007k\u0002\u0002\u0154\u0155\u0007q\u0002\u0002",
    "\u0155\u0156\u0007p\u0002\u0002\u0156F\u0003\u0002\u0002\u0002\u0157",
    "\u015a\u0005Q)\u0002\u0158\u015a\u0005K&\u0002\u0159\u0157\u0003\u0002",
    "\u0002\u0002\u0159\u0158\u0003\u0002\u0002\u0002\u015a\u015b\u0003\u0002",
    "\u0002\u0002\u015b\u0160\u0005k6\u0002\u015c\u015e\u0005Q)\u0002\u015d",
    "\u015f\u0005I%\u0002\u015e\u015d\u0003\u0002\u0002\u0002\u015e\u015f",
    "\u0003\u0002\u0002\u0002\u015f\u0161\u0003\u0002\u0002\u0002\u0160\u015c",
    "\u0003\u0002\u0002\u0002\u0160\u0161\u0003\u0002\u0002\u0002\u0161\u0168",
    "\u0003\u0002\u0002\u0002\u0162\u0163\u0005k6\u0002\u0163\u0165\u0005",
    "Q)\u0002\u0164\u0166\u0005I%\u0002\u0165\u0164\u0003\u0002\u0002\u0002",
    "\u0165\u0166\u0003\u0002\u0002\u0002\u0166\u0168\u0003\u0002\u0002\u0002",
    "\u0167\u0159\u0003\u0002\u0002\u0002\u0167\u0162\u0003\u0002\u0002\u0002",
    "\u0168H\u0003\u0002\u0002\u0002\u0169\u016b\t\u0002\u0002\u0002\u016a",
    "\u016c\t\u0003\u0002\u0002\u016b\u016a\u0003\u0002\u0002\u0002\u016b",
    "\u016c\u0003\u0002\u0002\u0002\u016c\u016e\u0003\u0002\u0002\u0002\u016d",
    "\u016f\u0005S*\u0002\u016e\u016d\u0003\u0002\u0002\u0002\u016f\u0170",
    "\u0003\u0002\u0002\u0002\u0170\u016e\u0003\u0002\u0002\u0002\u0170\u0171",
    "\u0003\u0002\u0002\u0002\u0171J\u0003\u0002\u0002\u0002\u0172\u0173",
    "\u00072\u0002\u0002\u0173\u0175\t\u0004\u0002\u0002\u0174\u0176\u0005",
    "O(\u0002\u0175\u0174\u0003\u0002\u0002\u0002\u0176\u0177\u0003\u0002",
    "\u0002\u0002\u0177\u0175\u0003\u0002\u0002\u0002\u0177\u0178\u0003\u0002",
    "\u0002\u0002\u0178L\u0003\u0002\u0002\u0002\u0179\u017a\u0007^\u0002",
    "\u0002\u017a\u017b\t\u0004\u0002\u0002\u017b\u017c\u0005O(\u0002\u017c",
    "\u017d\u0005O(\u0002\u017dN\u0003\u0002\u0002\u0002\u017e\u017f\t\u0005",
    "\u0002\u0002\u017fP\u0003\u0002\u0002\u0002\u0180\u0182\u0005S*\u0002",
    "\u0181\u0180\u0003\u0002\u0002\u0002\u0182\u0183\u0003\u0002\u0002\u0002",
    "\u0183\u0181\u0003\u0002\u0002\u0002\u0183\u0184\u0003\u0002\u0002\u0002",
    "\u0184R\u0003\u0002\u0002\u0002\u0185\u0186\t\u0006\u0002\u0002\u0186",
    "T\u0003\u0002\u0002\u0002\u0187\u0188\u0007v\u0002\u0002\u0188\u0189",
    "\u0007t\u0002\u0002\u0189\u018a\u0007w\u0002\u0002\u018a\u0191\u0007",
    "g\u0002\u0002\u018b\u018c\u0007h\u0002\u0002\u018c\u018d\u0007c\u0002",
    "\u0002\u018d\u018e\u0007n\u0002\u0002\u018e\u018f\u0007u\u0002\u0002",
    "\u018f\u0191\u0007g\u0002\u0002\u0190\u0187\u0003\u0002\u0002\u0002",
    "\u0190\u018b\u0003\u0002\u0002\u0002\u0191V\u0003\u0002\u0002\u0002",
    "\u0192\u0198\u0007)\u0002\u0002\u0193\u0197\n\u0007\u0002\u0002\u0194",
    "\u0197\u0005M\'\u0002\u0195\u0197\u0005Y-\u0002\u0196\u0193\u0003\u0002",
    "\u0002\u0002\u0196\u0194\u0003\u0002\u0002\u0002\u0196\u0195\u0003\u0002",
    "\u0002\u0002\u0197\u019a\u0003\u0002\u0002\u0002\u0198\u0196\u0003\u0002",
    "\u0002\u0002\u0198\u0199\u0003\u0002\u0002\u0002\u0199\u019b\u0003\u0002",
    "\u0002\u0002\u019a\u0198\u0003\u0002\u0002\u0002\u019b\u019c\u0007)",
    "\u0002\u0002\u019cX\u0003\u0002\u0002\u0002\u019d\u019e\u0007^\u0002",
    "\u0002\u019e\u019f\t\b\u0002\u0002\u019fZ\u0003\u0002\u0002\u0002\u01a0",
    "\u01a1\u0007*\u0002\u0002\u01a1\\\u0003\u0002\u0002\u0002\u01a2\u01a3",
    "\u0007+\u0002\u0002\u01a3^\u0003\u0002\u0002\u0002\u01a4\u01a5\u0007",
    "}\u0002\u0002\u01a5`\u0003\u0002\u0002\u0002\u01a6\u01a7\u0007\u007f",
    "\u0002\u0002\u01a7b\u0003\u0002\u0002\u0002\u01a8\u01a9\u0007]\u0002",
    "\u0002\u01a9d\u0003\u0002\u0002\u0002\u01aa\u01ab\u0007_\u0002\u0002",
    "\u01abf\u0003\u0002\u0002\u0002\u01ac\u01ad\u0007=\u0002\u0002\u01ad",
    "h\u0003\u0002\u0002\u0002\u01ae\u01af\u0007.\u0002\u0002\u01afj\u0003",
    "\u0002\u0002\u0002\u01b0\u01b1\u00070\u0002\u0002\u01b1l\u0003\u0002",
    "\u0002\u0002\u01b2\u01b3\u0007<\u0002\u0002\u01b3n\u0003\u0002\u0002",
    "\u0002\u01b4\u01b5\u0007?\u0002\u0002\u01b5\u01b6\u0007?\u0002\u0002",
    "\u01b6p\u0003\u0002\u0002\u0002\u01b7\u01b8\u0007>\u0002\u0002\u01b8",
    "\u01b9\u0007?\u0002\u0002\u01b9r\u0003\u0002\u0002\u0002\u01ba\u01bb",
    "\u0007@\u0002\u0002\u01bb\u01bc\u0007?\u0002\u0002\u01bct\u0003\u0002",
    "\u0002\u0002\u01bd\u01be\u0007#\u0002\u0002\u01be\u01bf\u0007?\u0002",
    "\u0002\u01bfv\u0003\u0002\u0002\u0002\u01c0\u01c1\u0007(\u0002\u0002",
    "\u01c1\u01c2\u0007(\u0002\u0002\u01c2x\u0003\u0002\u0002\u0002\u01c3",
    "\u01c4\u0007~\u0002\u0002\u01c4\u01c5\u0007~\u0002\u0002\u01c5z\u0003",
    "\u0002\u0002\u0002\u01c6\u01c7\u0007-\u0002\u0002\u01c7|\u0003\u0002",
    "\u0002\u0002\u01c8\u01c9\u0007/\u0002\u0002\u01c9~\u0003\u0002\u0002",
    "\u0002\u01ca\u01cb\u0007,\u0002\u0002\u01cb\u0080\u0003\u0002\u0002",
    "\u0002\u01cc\u01cd\u00071\u0002\u0002\u01cd\u0082\u0003\u0002\u0002",
    "\u0002\u01ce\u01cf\u0007(\u0002\u0002\u01cf\u0084\u0003\u0002\u0002",
    "\u0002\u01d0\u01d1\u0007~\u0002\u0002\u01d1\u0086\u0003\u0002\u0002",
    "\u0002\u01d2\u01d3\u0007`\u0002\u0002\u01d3\u0088\u0003\u0002\u0002",
    "\u0002\u01d4\u01d5\u0007\'\u0002\u0002\u01d5\u008a\u0003\u0002\u0002",
    "\u0002\u01d6\u01db\u0005\u008dG\u0002\u01d7\u01da\u0005\u008dG\u0002",
    "\u01d8\u01da\u0005S*\u0002\u01d9\u01d7\u0003\u0002\u0002\u0002\u01d9",
    "\u01d8\u0003\u0002\u0002\u0002\u01da\u01dd\u0003\u0002\u0002\u0002\u01db",
    "\u01d9\u0003\u0002\u0002\u0002\u01db\u01dc\u0003\u0002\u0002\u0002\u01dc",
    "\u008c\u0003\u0002\u0002\u0002\u01dd\u01db\u0003\u0002\u0002\u0002\u01de",
    "\u01df\t\t\u0002\u0002\u01df\u008e\u0003\u0002\u0002\u0002\u01e0\u01e2",
    "\t\n\u0002\u0002\u01e1\u01e0\u0003\u0002\u0002\u0002\u01e2\u01e3\u0003",
    "\u0002\u0002\u0002\u01e3\u01e1\u0003\u0002\u0002\u0002\u01e3\u01e4\u0003",
    "\u0002\u0002\u0002\u01e4\u01e5\u0003\u0002\u0002\u0002\u01e5\u01e6\b",
    "H\u0002\u0002\u01e6\u0090\u0003\u0002\u0002\u0002\u01e7\u01e9\u0007",
    "\u000f\u0002\u0002\u01e8\u01ea\u0007\f\u0002\u0002\u01e9\u01e8\u0003",
    "\u0002\u0002\u0002\u01e9\u01ea\u0003\u0002\u0002\u0002\u01ea\u01ed\u0003",
    "\u0002\u0002\u0002\u01eb\u01ed\u0007\f\u0002\u0002\u01ec\u01e7\u0003",
    "\u0002\u0002\u0002\u01ec\u01eb\u0003\u0002\u0002\u0002\u01ed\u01ee\u0003",
    "\u0002\u0002\u0002\u01ee\u01ef\bI\u0002\u0002\u01ef\u0092\u0003\u0002",
    "\u0002\u0002\u01f0\u01f1\u0007\'\u0002\u0002\u01f1\u01f2\u0007\u0080",
    "\u0002\u0002\u01f2\u01f6\u0003\u0002\u0002\u0002\u01f3\u01f5\u000b\u0002",
    "\u0002\u0002\u01f4\u01f3\u0003\u0002\u0002\u0002\u01f5\u01f8\u0003\u0002",
    "\u0002\u0002\u01f6\u01f7\u0003\u0002\u0002\u0002\u01f6\u01f4\u0003\u0002",
    "\u0002\u0002\u01f7\u01f9\u0003\u0002\u0002\u0002\u01f8\u01f6\u0003\u0002",
    "\u0002\u0002\u01f9\u01fa\u0007\u0080\u0002\u0002\u01fa\u01fb\u0007\'",
    "\u0002\u0002\u01fb\u01fc\u0003\u0002\u0002\u0002\u01fc\u01fd\bJ\u0003",
    "\u0002\u01fd\u0094\u0003\u0002\u0002\u0002\u01fe\u01ff\u0007\'\u0002",
    "\u0002\u01ff\u0200\u0007\'\u0002\u0002\u0200\u0204\u0003\u0002\u0002",
    "\u0002\u0201\u0203\n\u000b\u0002\u0002\u0202\u0201\u0003\u0002\u0002",
    "\u0002\u0203\u0206\u0003\u0002\u0002\u0002\u0204\u0202\u0003\u0002\u0002",
    "\u0002\u0204\u0205\u0003\u0002\u0002\u0002\u0205\u0207\u0003\u0002\u0002",
    "\u0002\u0206\u0204\u0003\u0002\u0002\u0002\u0207\u0208\bK\u0003\u0002",
    "\u0208\u0096\u0003\u0002\u0002\u0002\u0016\u0002\u0159\u015e\u0160\u0165",
    "\u0167\u016b\u0170\u0177\u0183\u0190\u0196\u0198\u01d9\u01db\u01e3\u01e9",
    "\u01ec\u01f6\u0204\u0004\b\u0002\u0002\u0002\u0003\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function lilu_grammarLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

lilu_grammarLexer.prototype = Object.create(antlr4.Lexer.prototype);
lilu_grammarLexer.prototype.constructor = lilu_grammarLexer;

Object.defineProperty(lilu_grammarLexer.prototype, "atn", {
        get : function() {
                return atn;
        }
});

lilu_grammarLexer.EOF = antlr4.Token.EOF;
lilu_grammarLexer.ASSIGN = 1;
lilu_grammarLexer.GT = 2;
lilu_grammarLexer.LT = 3;
lilu_grammarLexer.BANG = 4;
lilu_grammarLexer.TILDE = 5;
lilu_grammarLexer.ALLOCATE = 6;
lilu_grammarLexer.BOOL = 7;
lilu_grammarLexer.BREAK = 8;
lilu_grammarLexer.CASE = 9;
lilu_grammarLexer.CONST = 10;
lilu_grammarLexer.CONTINUE = 11;
lilu_grammarLexer.DECLARE = 12;
lilu_grammarLexer.DEFAULT = 13;
lilu_grammarLexer.DESTRUCT = 14;
lilu_grammarLexer.ELSE = 15;
lilu_grammarLexer.FLOAT = 16;
lilu_grammarLexer.FOR = 17;
lilu_grammarLexer.IF = 18;
lilu_grammarLexer.INT = 19;
lilu_grammarLexer.NIL = 20;
lilu_grammarLexer.OF = 21;
lilu_grammarLexer.PRIVATE = 22;
lilu_grammarLexer.PROTECTED = 23;
lilu_grammarLexer.PUBLIC = 24;
lilu_grammarLexer.READ = 25;
lilu_grammarLexer.RETURN = 26;
lilu_grammarLexer.STRING = 27;
lilu_grammarLexer.SUPER = 28;
lilu_grammarLexer.SWITCH = 29;
lilu_grammarLexer.THIS = 30;
lilu_grammarLexer.TYPE = 31;
lilu_grammarLexer.WHILE = 32;
lilu_grammarLexer.WRITE = 33;
lilu_grammarLexer.FUNCTION = 34;
lilu_grammarLexer.REAL_CONST = 35;
lilu_grammarLexer.HEX_CONST = 36;
lilu_grammarLexer.HEX_STR = 37;
lilu_grammarLexer.INT_CONST = 38;
lilu_grammarLexer.BOOL_CONST = 39;
lilu_grammarLexer.STRING_CONST = 40;
lilu_grammarLexer.LPAREN = 41;
lilu_grammarLexer.RPAREN = 42;
lilu_grammarLexer.LBRACE = 43;
lilu_grammarLexer.RBRACE = 44;
lilu_grammarLexer.LBRACK = 45;
lilu_grammarLexer.RBRACK = 46;
lilu_grammarLexer.SEMI = 47;
lilu_grammarLexer.COMMA = 48;
lilu_grammarLexer.DOT = 49;
lilu_grammarLexer.COLON = 50;
lilu_grammarLexer.EQUAL = 51;
lilu_grammarLexer.LE = 52;
lilu_grammarLexer.GE = 53;
lilu_grammarLexer.NOTEQUAL = 54;
lilu_grammarLexer.AND = 55;
lilu_grammarLexer.OR = 56;
lilu_grammarLexer.ADD = 57;
lilu_grammarLexer.SUB = 58;
lilu_grammarLexer.MUL = 59;
lilu_grammarLexer.DIV = 60;
lilu_grammarLexer.BITAND = 61;
lilu_grammarLexer.BITOR = 62;
lilu_grammarLexer.CARET = 63;
lilu_grammarLexer.MOD = 64;
lilu_grammarLexer.ID = 65;
lilu_grammarLexer.WHITESPACE = 66;
lilu_grammarLexer.NEWLINE = 67;
lilu_grammarLexer.BLOCKCOMMENT = 68;
lilu_grammarLexer.LINECOMMENT = 69;

lilu_grammarLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

lilu_grammarLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

lilu_grammarLexer.prototype.literalNames = [ null, "'='", "'>'", "'<'", 
                                             "'!'", "'~'", "'allocate'", 
                                             "'bool'", "'break'", "'case'", 
                                             "'const'", "'continue'", "'declare'", 
                                             "'default'", "'destruct'", 
                                             "'else'", "'float'", "'for'", 
                                             "'if'", "'int'", "'nil'", "'of'", 
                                             "'private'", "'protected'", 
                                             "'public'", "'read'", "'return'", 
                                             "'string'", "'super'", "'switch'", 
                                             "'this'", "'type'", "'while'", 
                                             "'write'", "'function'", null, 
                                             null, null, null, null, null, 
                                             "'('", "')'", "'{'", "'}'", 
                                             "'['", "']'", "';'", "','", 
                                             "'.'", "':'", "'=='", "'<='", 
                                             "'>='", "'!='", "'&&'", "'||'", 
                                             "'+'", "'-'", "'*'", "'/'", 
                                             "'&'", "'|'", "'^'", "'%'" ];

lilu_grammarLexer.prototype.symbolicNames = [ null, "ASSIGN", "GT", "LT", 
                                              "BANG", "TILDE", "ALLOCATE", 
                                              "BOOL", "BREAK", "CASE", "CONST", 
                                              "CONTINUE", "DECLARE", "DEFAULT", 
                                              "DESTRUCT", "ELSE", "FLOAT", 
                                              "FOR", "IF", "INT", "NIL", 
                                              "OF", "PRIVATE", "PROTECTED", 
                                              "PUBLIC", "READ", "RETURN", 
                                              "STRING", "SUPER", "SWITCH", 
                                              "THIS", "TYPE", "WHILE", "WRITE", 
                                              "FUNCTION", "REAL_CONST", 
                                              "HEX_CONST", "HEX_STR", "INT_CONST", 
                                              "BOOL_CONST", "STRING_CONST", 
                                              "LPAREN", "RPAREN", "LBRACE", 
                                              "RBRACE", "LBRACK", "RBRACK", 
                                              "SEMI", "COMMA", "DOT", "COLON", 
                                              "EQUAL", "LE", "GE", "NOTEQUAL", 
                                              "AND", "OR", "ADD", "SUB", 
                                              "MUL", "DIV", "BITAND", "BITOR", 
                                              "CARET", "MOD", "ID", "WHITESPACE", 
                                              "NEWLINE", "BLOCKCOMMENT", 
                                              "LINECOMMENT" ];

lilu_grammarLexer.prototype.ruleNames = [ "ASSIGN", "GT", "LT", "BANG", 
                                          "TILDE", "ALLOCATE", "BOOL", "BREAK", 
                                          "CASE", "CONST", "CONTINUE", "DECLARE", 
                                          "DEFAULT", "DESTRUCT", "ELSE", 
                                          "FLOAT", "FOR", "IF", "INT", "NIL", 
                                          "OF", "PRIVATE", "PROTECTED", 
                                          "PUBLIC", "READ", "RETURN", "STRING", 
                                          "SUPER", "SWITCH", "THIS", "TYPE", 
                                          "WHILE", "WRITE", "FUNCTION", 
                                          "REAL_CONST", "EXPONENT_PART", 
                                          "HEX_CONST", "HEX_STR", "HEX_DIGIT", 
                                          "INT_CONST", "DIGIT", "BOOL_CONST", 
                                          "STRING_CONST", "ESCAPE_SEQUENCE", 
                                          "LPAREN", "RPAREN", "LBRACE", 
                                          "RBRACE", "LBRACK", "RBRACK", 
                                          "SEMI", "COMMA", "DOT", "COLON", 
                                          "EQUAL", "LE", "GE", "NOTEQUAL", 
                                          "AND", "OR", "ADD", "SUB", "MUL", 
                                          "DIV", "BITAND", "BITOR", "CARET", 
                                          "MOD", "ID", "LETTER_", "WHITESPACE", 
                                          "NEWLINE", "BLOCKCOMMENT", "LINECOMMENT" ];

lilu_grammarLexer.prototype.grammarFileName = "lilu_grammar.g4";



exports.lilu_grammarLexer = lilu_grammarLexer;

