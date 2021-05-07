require("dotenv").config();
const { Composer } = require("micro-bot");

const bot = new Composer();

bot.start((ctx) =>
  ctx.reply("إختر 👇", {
    reply_markup: {
      keyboard: [
        ["📕 ثلاثة الأصول"],
        ["📗 بيان فضل علم السلف على علم الخلف"],
        ["📘 العقيدة الواسطية"],
        ["📙 مقدمة في أصول التفسير"],
        ["📒 حلية طالب العلم"],
        ["📓 منهج السالكين"],
        ["التواصل مع الشيخ 📱"],
      ],

      resize_keyboard: true,
      one_time_keyboard: true,
    },
  })
);
bot.help((ctx) =>
  ctx.reply(`هذا البوت يُسهِّل الوصول إلى مجالس شروح قناة ( تَدرّجْ - دروس حمود بن ثامر ).

كيفية الإستخدام:
1- أرسل جُملة start/ إلى البوت. 
2- إختر شرحاً.
3- إختر مجلِساً لهذا الشرح.

اذا نسيت التعليمات, أرسل جُملة help/ إلى البوت.`)
);

bot.hears("التواصل مع الشيخ 📱", async (ctx) => {
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 449);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 450);
});

// ---------------------------------------------------------------------------------------------- //
// ---------------------------------------- ثلاثة الأصول ---------------------------------------- //
// ---------------------------------------------------------------------------------------------- //

bot.hears("📕 ثلاثة الأصول", (ctx) =>
  ctx.reply("إختر مجلِساً 👇", {
    reply_markup: {
      inline_keyboard: [
        [
          { text: "1", callback_data: "1 ثلاثة الأصول" },
          { text: "2", callback_data: "2 ثلاثة الأصول" },
          { text: "3", callback_data: "3 ثلاثة الأصول" },
        ],
        [
          { text: "4", callback_data: "4 ثلاثة الأصول" },
          { text: "5", callback_data: "5 ثلاثة الأصول" },
          { text: "6", callback_data: "6 ثلاثة الأصول" },
        ],
        [
          { text: "7", callback_data: "7 ثلاثة الأصول" },
          { text: "8", callback_data: "8 ثلاثة الأصول" },
          { text: "9", callback_data: "9 ثلاثة الأصول" },
        ],
        [
          {
            text: "مقاطع مختصرة - ثلاثة الأصول",
            callback_data: "مقاطع مختصرة - ثلاثة الأصول",
          },
        ],
        [
          {
            text: "إقتباسات - ثلاثة الأصول",
            callback_data: "إقتباسات - ثلاثة الأصول",
          },
        ],
      ],
      resize_keyboard: true,
      one_time_keyboard: true,
    },
  })
);

bot.action("1 ثلاثة الأصول", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.deleteMessage();

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 11);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 12);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 13);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 14);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 15);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 16);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 17);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 18);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 19);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 20);
});

bot.action("2 ثلاثة الأصول", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.deleteMessage();

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 22);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 23);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 24);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 25);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 26);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 27);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 28);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 29);

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 30);
});

bot.action("3 ثلاثة الأصول", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.deleteMessage();

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 32);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 33);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 34);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 35);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 36);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 37);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 38);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 39);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 40);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 41);
});

bot.action("4 ثلاثة الأصول", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.deleteMessage();

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 43);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 44);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 45);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 46);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 47);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 48);
});

bot.action("5 ثلاثة الأصول", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.deleteMessage();

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 49);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 50);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 51);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 52);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 53);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 54);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 55);

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 56);
});

bot.action("6 ثلاثة الأصول", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.deleteMessage();

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 57);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 58);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 59);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 60);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 61);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 62);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 63);

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 64);
});

bot.action("7 ثلاثة الأصول", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.deleteMessage();

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 65);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 66);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 67);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 68);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 69);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 70);

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 71);
});

bot.action("8 ثلاثة الأصول", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.deleteMessage();

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 72);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 73);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 74);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 75);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 76);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 77);

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 78);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 79);
});

bot.action("9 ثلاثة الأصول", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.deleteMessage();

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 80);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 81);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 82);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 83);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 84);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 85);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 86);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 87);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 88);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 89);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 90);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 91);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 92);

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 93);
});

bot.action("مقاطع مختصرة - ثلاثة الأصول", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.deleteMessage();

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 21);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 31);
});

bot.action("إقتباسات - ثلاثة الأصول", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.deleteMessage();

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 42);
});

// ############################################################################################## //
// ############################## بيان فضل علم السلف على علم الخلف ############################## //
// ############################################################################################## //

bot.hears("📗 بيان فضل علم السلف على علم الخلف", (ctx) =>
  ctx.reply("إختر مجلِساً 👇", {
    reply_markup: {
      inline_keyboard: [
        [
          { text: "1", callback_data: "1 بيان فضل علم السلف على علم الخلف" },
          { text: "2", callback_data: "2 بيان فضل علم السلف على علم الخلف" },
        ],
        [
          { text: "3", callback_data: "3 بيان فضل علم السلف على علم الخلف" },

          { text: "4", callback_data: "4 بيان فضل علم السلف على علم الخلف" },
        ],
      ],
      resize_keyboard: true,
      one_time_keyboard: true,
    },
  })
);

bot.action("1 بيان فضل علم السلف على علم الخلف", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.deleteMessage();

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 94);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 95);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 96);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 97);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 98);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 99);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 100);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 101);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 102);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 103);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 104);

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 105);
});

bot.action("2 بيان فضل علم السلف على علم الخلف", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.deleteMessage();

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 106);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 107);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 108);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 109);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 110);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 111);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 112);

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 113);
});

bot.action("3 بيان فضل علم السلف على علم الخلف", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.deleteMessage();

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 114);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 115);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 116);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 117);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 118);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 119);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 120);

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 121);
});

bot.action("4 بيان فضل علم السلف على علم الخلف", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.deleteMessage();

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 122);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 123);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 124);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 125);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 126);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 127);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 128);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 129);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 130);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 131);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 132);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 133);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 134);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 135);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 136);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 137);

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 138);
});

// ############################################################################################## //
// ###################################### العقيدة الواسطية ###################################### //
// ############################################################################################## //

bot.hears("📘 العقيدة الواسطية", (ctx) =>
  ctx.reply("إختر مجلِساً 👇", {
    reply_markup: {
      inline_keyboard: [
        [
          { text: "1", callback_data: "1 العقيدة الواسطية" },
          { text: "2", callback_data: "2 العقيدة الواسطية" },
          { text: "3", callback_data: "3 العقيدة الواسطية" },
        ],
        [
          { text: "4", callback_data: "4 العقيدة الواسطية" },
          { text: "5", callback_data: "5 العقيدة الواسطية" },
          { text: "6", callback_data: "6 العقيدة الواسطية" },
        ],
        [
          { text: "7", callback_data: "7 العقيدة الواسطية" },
          { text: "8", callback_data: "8 العقيدة الواسطية" },
        ],
      ],
      resize_keyboard: true,
      one_time_keyboard: true,
    },
  })
);

bot.action("1 العقيدة الواسطية", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.deleteMessage();

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 139);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 140);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 141);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 142);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 143);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 144);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 145);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 146);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 147);

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 148);
});

bot.action("2 العقيدة الواسطية", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.deleteMessage();

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 149);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 150);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 151);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 152);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 153);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 154);

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 155);
});

bot.action("3 العقيدة الواسطية", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.deleteMessage();

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 156);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 157);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 158);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 159);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 160);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 161);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 162);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 163);
});

bot.action("4 العقيدة الواسطية", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.deleteMessage();

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 164);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 165);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 166);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 167);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 168);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 169);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 170);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 171);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 172);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 173);

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 174);
});

bot.action("5 العقيدة الواسطية", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.deleteMessage();

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 175);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 176);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 177);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 178);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 179);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 180);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 181);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 182);
});

bot.action("6 العقيدة الواسطية", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.deleteMessage();

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 183);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 184);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 185);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 186);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 187);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 188);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 189);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 190);

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 191);
});

bot.action("7 العقيدة الواسطية", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.deleteMessage();

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 192);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 193);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 194);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 195);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 196);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 197);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 198);

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 199);
});

bot.action("8 العقيدة الواسطية", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.deleteMessage();

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 200);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 201);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 202);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 203);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 204);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 205);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 206);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 207);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 208);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 209);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 210);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 211);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 212);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 213);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 214);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 215);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 216);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 217);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 218);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 219);

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 220);
});

// ############################################################################################## //
// #################################### مقدمة في أصول التفسير ################################### //
// ############################################################################################## //

bot.hears("📙 مقدمة في أصول التفسير", (ctx) =>
  ctx.reply("إختر مجلِساً 👇", {
    reply_markup: {
      inline_keyboard: [
        [
          { text: "(مع اسئلة) 1", callback_data: "1 مقدمة في أصول التفسير" },
          { text: "2", callback_data: "2 مقدمة في أصول التفسير" },
          { text: "3", callback_data: "3 مقدمة في أصول التفسير" },
        ],
        [
          { text: "4", callback_data: "4 مقدمة في أصول التفسير" },
          { text: "5", callback_data: "5 مقدمة في أصول التفسير" },
        ],
      ],
      resize_keyboard: true,
      one_time_keyboard: true,
    },
  })
);

bot.action("1 مقدمة في أصول التفسير", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.deleteMessage();

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 221);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 222);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 223);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 224);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 225);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 226);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 227);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 228);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 229);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 230);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 231);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 232);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 233);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 234);

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 235);
});

bot.action("2 مقدمة في أصول التفسير", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.deleteMessage();

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 236);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 237);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 238);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 239);

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 240);
});

bot.action("3 مقدمة في أصول التفسير", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.deleteMessage();

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 241);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 242);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 243);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 244);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 245);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 246);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 247);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 248);

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 249);
});

bot.action("4 مقدمة في أصول التفسير", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.deleteMessage();

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 250);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 251);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 252);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 253);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 254);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 255);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 256);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 257);

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 258);
});

bot.action("5 مقدمة في أصول التفسير", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.deleteMessage();

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 259);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 260);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 261);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 262);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 263);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 264);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 265);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 266);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 267);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 268);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 269);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 270);

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 271);
});

// ############################################################################################## //
// ####################################### حلية طالب العلم ###################################### //
// ############################################################################################## //

bot.hears("📒 حلية طالب العلم", (ctx) =>
  ctx.reply("إختر مجلِساً 👇", {
    reply_markup: {
      inline_keyboard: [
        [
          { text: "1", callback_data: "1 حلية طالب العلم" },
          { text: "2", callback_data: "2 حلية طالب العلم" },
          { text: "3", callback_data: "3 حلية طالب العلم" },
        ],
        [
          { text: "4", callback_data: "4 حلية طالب العلم" },
          { text: "5", callback_data: "5 حلية طالب العلم" },
          { text: "6", callback_data: "6 حلية طالب العلم" },
        ],
        [
          { text: "7", callback_data: "7 حلية طالب العلم" },
          { text: "8", callback_data: "8 حلية طالب العلم" },
          { text: "9", callback_data: "9 حلية طالب العلم" },
        ],
      ],
      resize_keyboard: true,
      one_time_keyboard: true,
    },
  })
);

bot.action("1 حلية طالب العلم", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.deleteMessage();

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 272);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 273);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 274);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 275);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 276);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 277);

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 278);
});

bot.action("2 حلية طالب العلم", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.deleteMessage();

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 279);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 280);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 281);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 282);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 283);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 284);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 285);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 286);

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 287);
});

bot.action("3 حلية طالب العلم", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.deleteMessage();

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 288);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 289);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 290);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 291);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 292);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 293);

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 294);
});

bot.action("4 حلية طالب العلم", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.deleteMessage();

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 295);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 296);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 297);

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 298);
});

bot.action("5 حلية طالب العلم", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.deleteMessage();

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 299);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 300);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 301);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 302);

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 303);
});

bot.action("6 حلية طالب العلم", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.deleteMessage();

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 304);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 305);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 306);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 307);

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 308);
});

bot.action("7 حلية طالب العلم", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.deleteMessage();

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 309);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 310);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 311);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 312);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 313);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 314);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 315);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 316);

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 317);
});

bot.action("8 حلية طالب العلم", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.deleteMessage();

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 318);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 319);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 320);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 321);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 322);

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 323);
});

bot.action("9 حلية طالب العلم", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.deleteMessage();

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 324);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 325);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 326);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 327);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 328);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 329);

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 330);
});

// ############################################################################################## //
// ######################################## منهج السالكين ####################################### //
// ############################################################################################## //

bot.hears("📓 منهج السالكين", (ctx) =>
  ctx.reply("إختر مجلِساً 👇", {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "متن منهج السالكين (PDF)",
            callback_data: "متن منهج السالكين (PDF)",
          },
        ],
        [
          { text: "1", callback_data: "1 منهج السالكين" },
          { text: "2", callback_data: "2 منهج السالكين" },
          { text: "3", callback_data: "3 منهج السالكين" },
        ],
        [
          { text: "4", callback_data: "4 منهج السالكين" },
          { text: "5", callback_data: "5 منهج السالكين" },
          { text: "6", callback_data: "6 منهج السالكين" },
        ],
        [
          { text: "7", callback_data: "7 منهج السالكين" },
          { text: "8", callback_data: "8 منهج السالكين" },
          { text: "9", callback_data: "9 منهج السالكين" },
        ],
        [
          { text: "10", callback_data: "10 منهج السالكين" },
          { text: "11", callback_data: "11 منهج السالكين" },
          { text: "12", callback_data: "12 منهج السالكين" },
        ],
        [
          { text: "13", callback_data: "13 منهج السالكين" },
          { text: "14", callback_data: "14 منهج السالكين" },
          { text: "15", callback_data: "15 منهج السالكين" },
        ],
      ],
      resize_keyboard: true,
      one_time_keyboard: true,
    },
  })
);

bot.action("1 منهج السالكين", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.deleteMessage();

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 336);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 337);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 338);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 339);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 340);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 341);

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 342);
});

bot.action("2 منهج السالكين", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.deleteMessage();

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 343);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 344);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 345);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 346);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 347);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 348);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 349);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 350);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 351);

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 352);
});

bot.action("3 منهج السالكين", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.deleteMessage();

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 353);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 354);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 355);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 356);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 357);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 358);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 359);
});

bot.action("4 منهج السالكين", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.deleteMessage();

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 360);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 361);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 362);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 363);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 364);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 365);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 366);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 367);
});

bot.action("5 منهج السالكين", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.deleteMessage();

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 368);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 369);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 370);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 371);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 372);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 373);

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 374);
});

bot.action("6 منهج السالكين", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.deleteMessage();

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 375);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 376);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 377);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 378);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 379);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 380);

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 381);
});

bot.action("7 منهج السالكين", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.deleteMessage();

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 382);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 383);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 384);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 385);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 386);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 387);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 388);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 389);

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 390);
});

bot.action("8 منهج السالكين", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.deleteMessage();

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 391);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 392);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 393);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 394);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 395);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 396);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 397);

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 398);
});

bot.action("9 منهج السالكين", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.deleteMessage();

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 399);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 400);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 401);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 402);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 403);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 404);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 405);

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 406);
});

bot.action("10 منهج السالكين", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.deleteMessage();

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 407);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 408);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 409);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 410);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 411);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 412);

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 413);
});

bot.action("11 منهج السالكين", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.deleteMessage();

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 414);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 415);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 416);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 417);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 418);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 419);
});

bot.action("12 منهج السالكين", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.deleteMessage();

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 420);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 421);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 422);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 423);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 424);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 425);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 426);
});

bot.action("13 منهج السالكين", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.deleteMessage();

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 427);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 428);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 429);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 430);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 431);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 432);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 433);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 434);
});

bot.action("14 منهج السالكين", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.deleteMessage();

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 435);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 436);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 437);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 438);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 439);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 440);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 441);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 442);

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 443);
});

bot.action("15 منهج السالكين", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.deleteMessage();

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 445);
});

bot.action("متن منهج السالكين (PDF)", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.deleteMessage();

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001480223437, 335);
});

module.exports = bot;
