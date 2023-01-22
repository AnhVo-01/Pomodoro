function LunarDate(dd, mm, yy, leap, jd) {
    this.day = dd;
    this.month = mm;
    this.year = yy;
    this.leap = leap;
    this.jd = jd;
}

const lCalender = {
    ABOUT: "",
    
    TK19: [0x30baa3, 0x56ab50, 0x422ba0, 0x2cab61, 0x52a370, 0x3c51e8, 0x60d160, 0x4ae4b0, 0x376926, 0x58daa0, //1800-1809
	    0x445b50, 0x3116d2, 0x562ae0, 0x3ea2e0, 0x28e2d2, 0x4ec950, 0x38d556, 0x5cb520, 0x46b690, 0x325da4, //1810-1819
	    0x5855d0, 0x4225d0, 0x2ca5b3, 0x52a2b0, 0x3da8b7, 0x60a950, 0x4ab4a0, 0x35b2a5, 0x5aad50, 0x4455b0, //1820-1829
	    0x302b74, 0x562570, 0x4052f9, 0x6452b0, 0x4e6950, 0x386d56, 0x5e5aa0, 0x46ab50, 0x3256d4, 0x584ae0, //1830-1839
	    0x42a570, 0x2d4553, 0x50d2a0, 0x3be8a7, 0x60d550, 0x4a5aa0, 0x34ada5, 0x5a95d0, 0x464ae0, 0x2eaab4, //1840-1849
	    0x54a4d0, 0x3ed2b8, 0x64b290, 0x4cb550, 0x385757, 0x5e2da0, 0x4895d0, 0x324d75, 0x5849b0, 0x42a4b0, //1850-1859
	    0x2da4b3, 0x506a90, 0x3aad98, 0x606b50, 0x4c2b60, 0x359365, 0x5a9370, 0x464970, 0x306964, 0x52e4a0, //1860-1869
	    0x3cea6a, 0x62da90, 0x4e5ad0, 0x392ad6, 0x5e2ae0, 0x4892e0, 0x32cad5, 0x56c950, 0x40d4a0, 0x2bd4a3, //1870-1879
	    0x50b690, 0x3a57a7, 0x6055b0, 0x4c25d0, 0x3695b5, 0x5a92b0, 0x44a950, 0x2ed954, 0x54b4a0, 0x3cb550, //1880-1889
	    0x286b52, 0x4e55b0, 0x3a2776, 0x5e2570, 0x4852b0, 0x32aaa5, 0x56e950, 0x406aa0, 0x2abaa3, 0x50ab50 //1890-1899
    ],

    TK20: [0x3c4bd8, 0x624ae0, 0x4ca570, 0x3854d5, 0x5cd260, 0x44d950, 0x315554, 0x5656a0, 0x409ad0, 0x2a55d2,
	    0x504ae0, 0x3aa5b6, 0x60a4d0, 0x48d250, 0x33d255, 0x58b540, 0x42d6a0, 0x2cada2, 0x5295b0, 0x3f4977,
	    0x644970, 0x4ca4b0, 0x36b4b5, 0x5c6a50, 0x466d50, 0x312b54, 0x562b60, 0x409570, 0x2c52f2, 0x504970,
	    0x3a6566, 0x5ed4a0, 0x48ea50, 0x336a95, 0x585ad0, 0x442b60, 0x2f86e3, 0x5292e0, 0x3dc8d7, 0x62c950,
	    0x4cd4a0, 0x35d8a6, 0x5ab550, 0x4656a0, 0x31a5b4, 0x5625d0, 0x4092d0, 0x2ad2b2, 0x50a950, 0x38b557,
	    0x5e6ca0, 0x48b550, 0x355355, 0x584da0, 0x42a5b0, 0x2f4573, 0x5452b0, 0x3ca9a8, 0x60e950, 0x4c6aa0,
	    0x36aea6, 0x5aab50, 0x464b60, 0x30aae4, 0x56a570, 0x405260, 0x28f263, 0x4ed940, 0x38db47, 0x5cd6a0,
	    0x4896d0, 0x344dd5, 0x5a4ad0, 0x42a4d0, 0x2cd4b4, 0x52b250, 0x3cd558, 0x60b540, 0x4ab5a0, 0x3755a6,
	    0x5c95b0, 0x4649b0, 0x30a974, 0x56a4b0, 0x40aa50, 0x29aa52, 0x4e6d20, 0x39ad47, 0x5eab60, 0x489370,
	    0x344af5, 0x5a4970, 0x4464b0, 0x2c74a3, 0x50ea50, 0x3d6a58, 0x6256a0, 0x4aaad0, 0x3696d5, 0x5c92e0
    ], /* Years 1900-1999 */

    TK21: [0x46c960, 0x2ed954, 0x54d4a0, 0x3eda50, 0x2a7552, 0x4e56a0, 0x38a7a7, 0x5ea5d0, 0x4a92b0, 0x32aab5,
	    0x58a950, 0x42b4a0, 0x2cbaa4, 0x50ad50, 0x3c55d9, 0x624ba0, 0x4ca5b0, 0x375176, 0x5c5270, 0x466930,
	    0x307934, 0x546aa0, 0x3ead50, 0x2a5b52, 0x504b60, 0x38a6e6, 0x5ea4e0, 0x48d260, 0x32ea65, 0x56d520,
	    0x40daa0, 0x2d56a3, 0x5256d0, 0x3c4afb, 0x6249d0, 0x4ca4d0, 0x37d0b6, 0x5ab250, 0x44b520, 0x2edd25,
	    0x54b5a0, 0x3e55d0, 0x2a55b2, 0x5049b0, 0x3aa577, 0x5ea4b0, 0x48aa50, 0x33b255, 0x586d20, 0x40ad60,
	    0x2d4b63, 0x525370, 0x3e49e8, 0x60c970, 0x4c54b0, 0x3768a6, 0x5ada50, 0x445aa0, 0x2fa6a4, 0x54aad0,
	    0x4052e0, 0x28d2e3, 0x4ec950, 0x38d557, 0x5ed4a0, 0x46d950, 0x325d55, 0x5856a0, 0x42a6d0, 0x2c55d4,
	    0x5252b0, 0x3ca9b8, 0x62a930, 0x4ab490, 0x34b6a6, 0x5aad50, 0x4655a0, 0x2eab64, 0x54a570, 0x4052b0,
	    0x2ab173, 0x4e6930, 0x386b37, 0x5e6aa0, 0x48ad50, 0x332ad5, 0x582b60, 0x42a570, 0x2e52e4, 0x50d160,
	    0x3ae958, 0x60d520, 0x4ada90, 0x355aa6, 0x5a56d0, 0x462ae0, 0x30a9d4, 0x54a2d0, 0x3ed150, 0x28e952
    ], /* Years 2000-2099 */

    TK22: [0x4eb520, 0x38d727, 0x5eada0, 0x4a55b0, 0x362db5, 0x5a45b0, 0x44a2b0, 0x2eb2b4, 0x54a950, 0x3cb559,
		0x626b20, 0x4cad50, 0x385766, 0x5c5370, 0x484570, 0x326574, 0x5852b0, 0x406950, 0x2a7953, 0x505aa0,
		0x3baaa7, 0x5ea6d0, 0x4a4ae0, 0x35a2e5, 0x5aa550, 0x42d2a0, 0x2de2a4, 0x52d550, 0x3e5abb, 0x6256a0,
		0x4c96d0, 0x3949b6, 0x5e4ab0, 0x46a8d0, 0x30d4b5, 0x56b290, 0x40b550, 0x2a6d52, 0x504da0, 0x3b9567,
		0x609570, 0x4a49b0, 0x34a975, 0x5a64b0, 0x446a90, 0x2cba94, 0x526b50, 0x3e2b60, 0x28ab61, 0x4c9570,
		0x384ae6, 0x5cd160, 0x46e4a0, 0x2eed25, 0x54da90, 0x405b50, 0x2c36d3, 0x502ae0, 0x3a93d7, 0x6092d0,
		0x4ac950, 0x32d556, 0x58b4a0, 0x42b690, 0x2e5d94, 0x5255b0, 0x3e25fa, 0x6425b0, 0x4e92b0, 0x36aab6,
		0x5c6950, 0x4674a0, 0x31b2a5, 0x54ad50, 0x4055a0, 0x2aab73, 0x522570, 0x3a5377, 0x6052b0, 0x4a6950,
		0x346d56, 0x585aa0, 0x42ab50, 0x2e56d4, 0x544ae0, 0x3ca570, 0x2864d2, 0x4cd260, 0x36eaa6, 0x5ad550,
		0x465aa0, 0x30ada5, 0x5695d0, 0x404ad0, 0x2aa9b3, 0x50a4d0, 0x3ad2b7, 0x5eb250, 0x48b540, 0x33d556
    ], /* Years 2100-2199 */

    Can:["Giáp","Ất","Bính","Đinh","Mậu","Kỷ","Canh","Tân","Nhâm","Quý"],

    Chi:["Tí","Sửu","Dần","Mão","Thìn","Tị","Ngọ","Mùi","Thân","Dậu","Tuất","Hợi"],

    // Địa chi của các tháng từ 1 đến 12
    DiaChi:["Dần","Mão","Thìn","Tỵ","Ngọ","Mùi","Thân","Dậu","Tuất","Hợi","Tí","Sửu"],

    TIETKHI: ["Xu\u00E2n ph\u00E2n", "Thanh minh", "C\u1ED1c v\u0169", "L\u1EADp h\u1EA1", "Ti\u1EC3u m\u00E3n", "Mang ch\u1EE7ng",
	"H\u1EA1 ch\u00ED", "Ti\u1EC3u th\u1EED", "\u0110\u1EA1i th\u1EED", "L\u1EADp thu", "X\u1EED th\u1EED", "B\u1EA1ch l\u1ED9",
	"Thu ph\u00E2n", "H\u00E0n l\u1ED9", "S\u01B0\u01A1ng gi\u00E1ng", "L\u1EADp \u0111\u00F4ng", "Ti\u1EC3u tuy\u1EBFt", "\u0110\u1EA1i tuy\u1EBFt",
	"\u0110\u00F4ng ch\u00ED", "Ti\u1EC3u h\u00E0n", "\u0110\u1EA1i h\u00E0n", "L\u1EADp xu\u00E2n", "V\u0169 Th\u1EE7y", "Kinh tr\u1EADp"
    ],

    // Các ngày lễ dương lịch
    festival: {
        '1-1'  : {title: "New Year's Day"},
        '2-3'  : {title: "Ngày thành lập Đảng Cộng sản Việt Nam"},
        '2-14' : {title: "Valentine’s Day"},
        '3-8'  : {title: 'International Women’s Day'},
        '3-10' : {title: 'Giỗ tổ Hùng Vương'},
        '3-10' : {title: 'Giỗ tổ Hùng Vương'},
        '3-20' : {title: 'International Day of Happiness'},
        '4-1'  : {title: "April Fools' Day"},
        '4-22' : {title: 'Earth Day'},
        '4-30' : {title: 'Ngày Giải Phóng Miền Nam'},
        '5-1'  : {title: 'May Day'},
        '5-7'  : {title: 'Ngày Chiến thắng Điện Biện Phủ'},
        '5-19' : {title: "Ho Chi Minh's birthday"},
        '6-1'  : {title: 'International Children’s Day'},
        '9-2'  : {title: 'Vietnam Independence Day'},
        '10-31': {title: 'Halloween'},
        '11-20': { title: 'Ngày Nhà giáo Việt Nam' },
        '12-25': {title: 'Christmas Day'},
    },
  
    // Ngày lễ âm lịch
    lfestival: {
        '12-30': {title: 'Đêm giao thừa'},
        '1-1'  : {title: 'Tết Nguyên Đán'},
        '1-15' : {title: 'Tết Nguyên Tiêu'},
        '3-3'  : {title: 'Tết Hàn Thực'},
        '3-10' : {title: 'Giỗ Tổ Hùng Vương'},
        '4-15' : {title: 'Lễ Phật Đản'},
        '5-5'  : {title: 'Tết Đoan Ngọ'},
        '7-7'  : {title: 'Thất Tịch'},
        '7-15' : {title: 'Lễ Vu Lan'},
        '8-15' : {title: 'Tết Trung Thu'},
        '9-9'  : {title: 'Tết Trùng Cửu'},
        '10-10': {title: 'Tết Thường Tân'},
        '10-15': {title: 'Tết Hạ Nguyên'},
        '12-23': {title: 'Ông Công ông Táo'}
    },

    getLYear(lYear) {
        var canKey = (lYear - 3) % 10;
        var chiKey = (lYear - 3) % 12;
        if(canKey == 0) canKey = 10;
        if(chiKey == 0) chiKey = 12;
        return this.Can[canKey-1] + ' ' + this.Chi[chiKey-1];
    },

    // getLMonth(lYear, lMonth) {
    //     if(lMonth > 12 || m < 1) {return -1} //Nếu tham số sai trả về -1

    //     var canKey;
    //     var yCanKey = (lYear - 3) % 10;
    //     if(yCanKey == 0) yCanKey = 10;

    //     if(yCanKey == 0 || yCanKey == 5) {
    //         canKey = 2;
    //     }
    //     return this.Can[canKey-1] + ' ' + this.DiaChi[lMonth-1];
    // },

    findLunarDate(jd, ly) {
        if (jd > this.jdn(31, 12, 2199) || jd < this.jdn(25, 1, 1800) || ly[0].jd > jd) {
            return new LunarDate(0, 0, 0, 0, jd);
        }
        var i = ly.length-1;
        while (jd < ly[i].jd) {
            i--;
        }
        var off = jd - ly[i].jd;
        ret = new LunarDate(ly[i].day+off, ly[i].month, ly[i].year, ly[i].leap, jd);
        return ret;
    },

    getYearInfo:function(yyyy) {
        var yearCode;
        if (yyyy < 1900) {
            yearCode = this.TK19[yyyy - 1800];
        } else if (yyyy < 2000) {
            yearCode = this.TK20[yyyy - 1900];
        } else if (yyyy < 2100) {
            yearCode = this.TK21[yyyy - 2000];
        } else {
            yearCode = this.TK22[yyyy - 2100];
        }
        return this.decodeLunarYear(yyyy, yearCode);
    },

    jdn(dd, mm, yy) {
        var a = Math.floor((14 - mm) / 12);
        var y = yy+4800-a;
        var m = mm+12*a-3;
        var jd = dd + Math.floor((153*m+2)/5) + 365*y + Math.floor(y/4) - Math.floor(y/100) + Math.floor(y/400) - 32045;
        return jd;
        //return 367*yy - Math.floor(7*(yy+Math.floor((mm+9)/12))/4) - Math.floor(3*(Math.floor((yy+(mm-9)/7)/100)+1)/4) + Math.floor(275*mm/9)+dd+1721029;
    },

    decodeLunarYear(yy, k) {
        var monthLengths, regularMonths, offsetOfTet, leapMonth, leapMonthLength, solarNY, currentJD, j, mm;
        var ly = new Array();
        monthLengths = new Array(29, 30);
        regularMonths = new Array(12);
        offsetOfTet = k >> 17;
        leapMonth = k & 0xf;
        leapMonthLength = monthLengths[k >> 16 & 0x1];
        solarNY = this.jdn(1, 1, yy);
        currentJD = solarNY+offsetOfTet;
        j = k >> 4;
        for(i = 0; i < 12; i++) {
            regularMonths[12 - i - 1] = monthLengths[j & 0x1];
            j >>= 1;
        }
        if (leapMonth == 0) {
            for(mm = 1; mm <= 12; mm++) {
                ly.push(new LunarDate(1, mm, yy, 0, currentJD));
                currentJD += regularMonths[mm-1];
            }
        } else {
            for(mm = 1; mm <= leapMonth; mm++) {
                ly.push(new LunarDate(1, mm, yy, 0, currentJD));
                currentJD += regularMonths[mm-1];
            }
            ly.push(new LunarDate(1, leapMonth, yy, 1, currentJD));
            currentJD += leapMonthLength;
            for(mm = leapMonth+1; mm <= 12; mm++) {
                ly.push(new LunarDate(1, mm, yy, 0, currentJD));
                currentJD += regularMonths[mm-1];
            }
        }
        return ly;
    },

    getLunarDate(dd, mm, yyyy) {
        var ly, jd;
        if (yyyy < 1800 || 2199 < yyyy) {
            //return new LunarDate(0, 0, 0, 0, 0);
        }
        ly = this.getYearInfo(yyyy);
        jd = this.jdn(dd, mm, yyyy);
        if (jd < ly[0].jd) {
            ly = this.getYearInfo(yyyy - 1);
        }
        return this.findLunarDate(jd, ly);
    }
}


const date = new Date();

const renderCalender = () =>{
    date.setDate(1);

    const monthDays = document.querySelector('.days');

    const lastDay = new Date(date.getFullYear(), date.getMonth()+1, 0).getDate();

    const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

    const lastDayIndex = new Date(date.getFullYear(), date.getMonth()+1, 0).getDay();

    const nextDays = 7-lastDayIndex-1;

    const firstDayIndex = date.getDay();

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    document.querySelector('.date h1').innerHTML = months[date.getMonth()];

    document.querySelector('.date p').innerHTML = new Date().toDateString();

    let days = "";

    for(let x=firstDayIndex; x>0; x--){
        days += `<div class="prev-date">${prevLastDay - x + 1}<span class="jDate">${lCalender.getLunarDate(prevLastDay - x + 1, date.getMonth(), date.getFullYear()).day}</span></div>`;
    }

    for(let i=1; i<=lastDay; i++){
        if(i===new Date().getDate() && date.getMonth() === new Date().getMonth()){
            days += `<div class="today">
                        <span>${i}</span>
                        <span class="jDate">${lCalender.getLunarDate(i, date.getMonth()+1, date.getFullYear()).day}</span>
                    </div>`;
        }else{
            if (lCalender.getLunarDate(i, date.getMonth()+1, date.getFullYear()).day == 1) {
                days += `<div><span>${i}</span><span class="jDate first">${lCalender.getLunarDate(i, date.getMonth()+1, date.getFullYear()).day}/${lCalender.getLunarDate(i, date.getMonth()+1, date.getFullYear()).month}</span></div>`;
            }else{
                days += `<div><span>${i}</span><span class="jDate">${lCalender.getLunarDate(i, date.getMonth()+1, date.getFullYear()).day}</span></div>`;
            }
        }
    }

    for(let j=1; j<=nextDays; j++){
        days += `<div class="next-date">${j}<span class="jDate">${lCalender.getLunarDate(j, date.getMonth()+2, date.getFullYear()).day}</span></div>`;
    }
    monthDays.innerHTML = days;
};

document.querySelector('.prev').addEventListener("click",() =>{
    date.setMonth(date.getMonth()-1);
    renderCalender();
});

document.querySelector('.next').addEventListener('click',() =>{
    date.setMonth(date.getMonth()+1);
    renderCalender();
});

renderCalender();