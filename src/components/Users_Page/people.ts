type people = {
    name: string
    id: number
    badge: string
    age: number
    date: string
} 

const people: people[] = [
    {
       id: 1,
       name: "እንደቃሉ ዘመኑ",
       age: 20,
       badge: "active",
       familySize: 4,
       gender: "ወንድ",
       educationLevel: "Bachelor Degree",
       address: "ስታድየም ሰፈር",
       phoneNumber: "0934898608",
       marriege: "ያላገባ",
       membership: "ቆራቢ",
       work: "የመንግስት",
       baptized: true,
       date: "2024-06-12"
    },
    {
       id: 2,
       name: "ማርያም ታደሰ",
       age: 28,
       badge: "active",
       familySize: 3,
       gender: "ሴት",
       educationLevel: "Master Degree",
       address: "ጎረቤት ቦታ",
       phoneNumber: "0923456789",
       marriege: "ያገባ",
       membership: "ቆራቢ",
       work: "የግል",
       baptized: false,
       date: "2024-04-15"
    },
    {
       id: 3,
       name: "አለምአቀፍ አለም",
       age: 35,
       badge: "inactive",
       familySize: 5,
       gender: "ወንድ",
       educationLevel: "PhD",
       address: "ባሕር ዳር",
       phoneNumber: "0912345678",
       marriege: "ያገባ",
       membership: "ያልሆነ",
       work: "የመንግስት",
       baptized: true,
       date: "2024-05-20"
    },
    {
       id: 4,
       name: "እምባቸው አለኝ",
       age: 40,
       badge: "deceased",
       familySize: 6,
       gender: "ሴት",
       educationLevel: "Diploma",
       address: "እንጦጦ ቦታ",
       phoneNumber: "0987654321",
       marriege: "ያላገባ",
       membership: "ቆራቢ",
       work: "የግል",
       baptized: false,
       date: "2024-03-10"
    },
    {
       id: 5,
       name: "ደስታ ጌታሁን",
       age: 50,
       badge: "active",
       familySize: 4,
       gender: "ወንድ",
       educationLevel: "High School",
       address: "ጣቢያ አካባቢ",
       phoneNumber: "0967890123",
       marriege: "ያገባ",
       membership: "ያልሆነ",
       work: "የመንግስት",
       baptized: true,
       date: "2024-02-25"
    },
    {
       id: 6,
       name: "ጸጋ ያለም",
       age: 26,
       badge: "inactive",
       familySize: 3,
       gender: "ሴት",
       educationLevel: "Bachelor Degree",
       address: "ዓይነ ምስል",
       phoneNumber: "0956789012",
       marriege: "ያላገባ",
       membership: "ቆራቢ",
       work: "የግል",
       baptized: false,
       date: "2024-01-15"
    },
    {
       id: 7,
       name: "መስፍን ጌታቸው",
       age: 34,
       badge: "active",
       familySize: 2,
       gender: "ወንድ",
       educationLevel: "Master Degree",
       address: "ጎረቤት ቦታ",
       phoneNumber: "0934567890",
       marriege: "ያገባ",
       membership: "ቆራቢ",
       work: "የመንግስት",
       baptized: true,
       date: "2024-06-22"
    },
    {
       id: 8,
       name: "ሀይለ ብርሃን",
       age: 45,
       badge: "deceased",
       familySize: 7,
       gender: "ሴት",
       educationLevel: "Diploma",
       address: "ትልቅ ገበያ",
       phoneNumber: "0945678901",
       marriege: "ያላገባ",
       membership: "ያልሆነ",
       work: "የግል",
       baptized: false,
       date: "2024-05-30"
    },
    {
       id: 9,
       name: "አብርሃም ወልደድ",
       age: 38,
       badge: "active",
       familySize: 5,
       gender: "ወንድ",
       educationLevel: "PhD",
       address: "ደሴ አካባቢ",
       phoneNumber: "0923456780",
       marriege: "ያገባ",
       membership: "ቆራቢ",
       work: "የመንግስት",
       baptized: true,
       date: "2024-04-18"
    },
    {
       id: 10,
       name: "ገብረክርስቶስ አለምነህ",
       age: 29,
       badge: "inactive",
       familySize: 4,
       gender: "ሴት",
       educationLevel: "Bachelor Degree",
       address: "አዲስ አካባቢ",
       phoneNumber: "0912345671",
       marriege: "ያላገባ",
       membership: "ያልሆነ",
       work: "የግል",
       baptized: false,
       date: "2024-03-25"
    },
    {
       id: 11,
       name: "ሚካኤል አበበ",
       age: 37,
       badge: "active",
       familySize: 3,
       gender: "ወንድ",
       educationLevel: "High School",
       address: "ሰላም ቦታ",
       phoneNumber: "0987654322",
       marriege: "ያገባ",
       membership: "ቆራቢ",
       work: "የመንግስት",
       baptized: true,
       date: "2024-05-17"
    },
    {
       id: 12,
       name: "ቤተልሄም ገብረሚካኤል",
       age: 22,
       badge: "active",
       familySize: 4,
       gender: "ሴት",
       educationLevel: "Bachelor Degree",
       address: "አቶ ሀጎስ ቤት",
       phoneNumber: "0912345672",
       marriege: "ያላገባ",
       membership: "ቆራቢ",
       work: "የግል",
       baptized: false,
       date: "2024-04-22"
    },
    {
       id: 13,
       name: "ማርታ ሚካኤል",
       age: 31,
       badge: "inactive",
       familySize: 5,
       gender: "ሴት",
       educationLevel: "Master Degree",
       address: "ስታድየም ሰፈር",
       phoneNumber: "0923456781",
       marriege: "ያገባ",
       membership: "ያልሆነ",
       work: "የመንግስት",
       baptized: true,
       date: "2024-06-01"
    },
    {
       id: 14,
       name: "ሰላም ጌታቸው",
       age: 27,
       badge: "deceased",
       familySize: 6,
       gender: "ወንድ",
       educationLevel: "Diploma",
       address: "ታህሳስ ቦታ",
       phoneNumber: "0912345673",
       marriege: "ያላገባ",
       membership: "ቆራቢ",
       work: "የግል",
       baptized: false,
       date: "2024-03-10"
    },
    {
       id: 15,
       name: "ያእቆብ እንደሚካኤል",
       age: 32,
       badge: "active",
       familySize: 4,
       gender: "ወንድ",
       educationLevel: "Bachelor Degree",
       address: "ታህሳስ ሰፈር",
       phoneNumber: "0945678902",
       marriege: "ያገባ",
       membership: "ቆራቢ",
       work: "የመንግስት",
       baptized: true,
       date: "2024-02-22"
    },
    {
       id: 16,
       name: "ሚካኤል አለም",
       age: 38,
       badge: "inactive",
       familySize: 3,
       gender: "ወንድ",
       educationLevel: "PhD",
       address: "ታዲዎስ ቦታ",
       phoneNumber: "0912345674",
       marriege: "ያገባ",
       membership: "ያልሆነ",
       work: "የግል",
       baptized: false,
       date: "2024-04-28"
    },
    {
       id: 17,
       name: "ዘናዘንታ ገብረእግዚአብሔር",
       age: 46,
       badge: "deceased",
       familySize: 5,
       gender: "ሴት",
       educationLevel: "Diploma",
       address: "ታዲዎስ አካባቢ",
       phoneNumber: "0934567892",
       marriege: "ያላገባ",
       membership: "ቆራቢ",
       work: "የመንግስት",
       baptized: false,
       date: "2024-06-07"
    },
    {
       id: 18,
       name: "የስማኤል ተክለማሪያም",
       age: 28,
       badge: "active",
       familySize: 2,
       gender: "ወንድ",
       educationLevel: "Master Degree",
       address: "ጣቢያ ሰፈር",
       phoneNumber: "0912345675",
       marriege: "ያገባ",
       membership: "ያልሆነ",
       work: "የመንግስት",
       baptized: true,
       date: "2024-05-19"
    },
    {
       id: 19,
       name: "ማርታ ወልደድ",
       age: 30,
       badge: "inactive",
       familySize: 4,
       gender: "ሴት",
       educationLevel: "Bachelor Degree",
       address: "ታዲዎስ ሰፈር",
       phoneNumber: "0912345676",
       marriege: "ያላገባ",
       membership: "ቆራቢ",
       work: "የግል",
       baptized: false,
       date: "2024-06-18"
    },
    {
       id: 20,
       name: "ሙሉጌታ ገብረሚካኤል",
       age: 34,
       badge: "active",
       familySize: 3,
       gender: "ወንድ",
       educationLevel: "High School",
       address: "ታዲዎስ ቦታ",
       phoneNumber: "0934567893",
       marriege: "ያገባ",
       membership: "ያልሆነ",
       work: "የግል",
       baptized: true,
       date: "2024-04-23"
    },
    {
       id: 21,
       name: "ጸጋ አበበ",
       age: 40,
       badge: "deceased",
       familySize: 6,
       gender: "ሴት",
       educationLevel: "Diploma",
       address: "ጣቢያ ሰፈር",
       phoneNumber: "0912345677",
       marriege: "ያላገባ",
       membership: "ቆራቢ",
       work: "የመንግስት",
       baptized: false,
       date: "2024-02-19"
    },
    {
       id: 22,
       name: "እምባቸው ሀይለማርያም",
       age: 50,
       badge: "active",
       familySize: 4,
       gender: "ወንድ",
       educationLevel: "PhD",
       address: "ጠረጴዛ ቦታ",
       phoneNumber: "0934567894",
       marriege: "ያላገባ",
       membership: "ቆራቢ",
       work: "የግል",
       baptized: true,
       date: "2024-05-05"
    },
    {
       id: 23,
       name: "አስቤዛ ገብረክርስቶስ",
       age: 27,
       badge: "inactive",
       familySize: 5,
       gender: "ሴት",
       educationLevel: "Bachelor Degree",
       address: "በታች ቦታ",
       phoneNumber: "0923456783",
       marriege: "ያገባ",
       membership: "ያልሆነ",
       work: "የግል",
       baptized: false,
       date: "2024-03-21"
    },
    {
       id: 24,
       name: "ዮሐንስ አለማየሁ",
       age: 32,
       badge: "deceased",
       familySize: 4,
       gender: "ወንድ",
       educationLevel: "Master Degree",
       address: "በታች ሰፈር",
       phoneNumber: "0912345678",
       marriege: "ያገባ",
       membership: "ቆራቢ",
       work: "የመንግስት",
       baptized: true,
       date: "2024-06-10"
    },
    {
       id: 25,
       name: "አበበ ተፈራ",
       age: 36,
       badge: "active",
       familySize: 3,
       gender: "ወንድ",
       educationLevel: "PhD",
       address: "ሰላም አካባቢ",
       phoneNumber: "0945678904",
       marriege: "ያላገባ",
       membership: "ያልሆነ",
       work: "የግል",
       baptized: true,
       date: "2024-04-20"
    },
    {
       id: 26,
       name: "አበበ ተፈራ",
       age: 36,
       badge: "inactive",
       familySize: 3,
       gender: "ወንድ",
       educationLevel: "High School",
       address: "ስታድየም ሰፈር",
       phoneNumber: "0945678905",
       marriege: "ያላገባ",
       membership: "ያልሆነ",
       work: "የመንግስት",
       baptized: true,
       date: "2024-05-24"
    },
    {
       id: 27,
       name: "አበበ ተፈራ",
       age: 36,
       badge: "deceased",
       familySize: 3,
       gender: "ወንድ",
       educationLevel: "Bachelor Degree",
       address: "ጠረጴዛ ሰፈር",
       phoneNumber: "0934567896",
       marriege: "ያላገባ",
       membership: "ያልሆነ",
       work: "የመንግስት",
       baptized: true,
       date: "2024-06-19"
    },
    {
       id: 28,
       name: "አበበ ተፈራ",
       age: 36,
       badge: "active",
       familySize: 3,
       gender: "ወንድ",
       educationLevel: "Bachelor Degree",
       address: "ስታድየም ሰፈር",
       phoneNumber: "0945678907",
       marriege: "ያላገባ",
       membership: "ያልሆነ",
       work: "የመንግስት",
       baptized: true,
       date: "2024-02-10"
    },
    {
       id: 29,
       name: "አበበ ተፈራ",
       age: 36,
       badge: "inactive",
       familySize: 3,
       gender: "ወንድ",
       educationLevel: "Master Degree",
       address: "ጠረጴዛ ሰፈር",
       phoneNumber: "0912345679",
       marriege: "ያላገባ",
       membership: "ያልሆነ",
       work: "የመንግስት",
       baptized: true,
       date: "2024-03-15"
    },
    {
       id: 30,
       name: "አበበ ተፈራ",
       age: 36,
       badge: "deceased",
       familySize: 3,
       gender: "ወንድ",
       educationLevel: "PhD",
       address: "ጠረጴዛ አካባቢ",
       phoneNumber: "0912345680",
       marriege: "ያላገባ",
       membership: "ያልሆነ",
       work: "የመንግስት",
       baptized: true,
       date: "2024-04-19"
    },
    {
       id: 31,
       name: "አበበ ተፈራ",
       age: 36,
       badge: "active",
       familySize: 3,
       gender: "ወንድ",
       educationLevel: "PhD",
       address: "ስታድየም አካባቢ",
       phoneNumber: "0912345681",
       marriege: "ያላገባ",
       membership: "ያልሆነ",
       work: "የመንግስት",
       baptized: true,
       date: "2024-05-10"
    },
    {
       id: 32,
       name: "አበበ ተፈራ",
       age: 36,
       badge: "inactive",
       familySize: 3,
       gender: "ወንድ",
       educationLevel: "Bachelor Degree",
       address: "ጠረጴዛ ሰፈር",
       phoneNumber: "0945678910",
       marriege: "ያላገባ",
       membership: "ያልሆነ",
       work: "የመንግስት",
       baptized: true,
       date: "2024-06-12"
    },
    {
       id: 33,
       name: "አበበ ተፈራ",
       age: 36,
       badge: "deceased",
       familySize: 3,
       gender: "ወንድ",
       educationLevel: "High School",
       address: "ስታድየም ሰፈር",
       phoneNumber: "0912345682",
       marriege: "ያላገባ",
       membership: "ያልሆነ",
       work: "የመንግስት",
       baptized: true,
       date: "2024-05-22"
    },
    {
       id: 34,
       name: "አበበ ተፈራ",
       age: 36,
       badge: "active",
       familySize: 3,
       gender: "ወንድ",
       educationLevel: "Master Degree",
       address: "ጠረጴዛ ሰፈር",
       phoneNumber: "0912345683",
       marriege: "ያላገባ",
       membership: "ያልሆነ",
       work: "የመንግስት",
       baptized: true,
       date: "2024-02-15"
    },
    {
       id: 35,
       name: "አበበ ተፈራ",
       age: 36,
       badge: "inactive",
       familySize: 3,
       gender: "ወንድ",
       educationLevel: "PhD",
       address: "ጠረጴዛ ሰፈር",
       phoneNumber: "0912345684",
       marriege: "ያላገባ",
       membership: "ያልሆነ",
       work: "የመንግስት",
       baptized: true,
       date: "2024-03-22"
    },
    {
       id: 36,
       name: "አበበ ተፈራ",
       age: 36,
       badge: "deceased",
       familySize: 3,
       gender: "ወንድ",
       educationLevel: "High School",
       address: "ጠረጴዛ ሰፈር",
       phoneNumber: "0912345685",
       marriege: "ያላገባ",
       membership: "ያልሆነ",
       work: "የመንግስት",
       baptized: true,
       date: "2024-04-23"
    },
    {
       id: 37,
       name: "አበበ ተፈራ",
       age: 36,
       badge: "active",
       familySize: 3,
       gender: "ወንድ",
       educationLevel: "Bachelor Degree",
       address: "ጠረጴዛ ሰፈር",
       phoneNumber: "0912345686",
       marriege: "ያላገባ",
       membership: "ያልሆነ",
       work: "የመንግስት",
       baptized: true,
       date: "2024-05-24"
    },
    {
       id: 38,
       name: "አበበ ተፈራ",
       age: 36,
       badge: "inactive",
       familySize: 3,
       gender: "ወንድ",
       educationLevel: "Master Degree",
       address: "ስታድየም ሰፈር",
       phoneNumber: "0912345687",
       marriege: "ያላገባ",
       membership: "ያልሆነ",
       work: "የመንግስት",
       baptized: true,
       date: "2024-06-24"
    },
    {
       id: 39,
       name: "አበበ ተፈራ",
       age: 36,
       badge: "deceased",
       familySize: 3,
       gender: "ወንድ",
       educationLevel: "PhD",
       address: "ጠረጴዛ ሰፈር",
       phoneNumber: "0912345688",
       marriege: "ያላገባ",
       membership: "ያልሆነ",
       work: "የመንግስት",
       baptized: true,
       date: "2024-02-20"
    },
    {
       id: 40,
       name: "አበበ ተፈራ",
       age: 36,
       badge: "active",
       familySize: 3,
       gender: "ወንድ",
       educationLevel: "Bachelor Degree",
       address: "ጠረጴዛ ሰፈር",
       phoneNumber: "0934567897",
       marriege: "ያላገባ",
       membership: "ያልሆነ",
       work: "የመንግስት",
       baptized: true,
       date: "2024-03-12"
    },
    {
       id: 41,
       name: "አበበ ተፈራ",
       age: 36,
       badge: "inactive",
       familySize: 3,
       gender: "ወንድ",
       educationLevel: "High School",
       address: "ጠረጴዛ አካባቢ",
       phoneNumber: "0934567898",
       marriege: "ያላገባ",
       membership: "ያልሆነ",
       work: "የመንግስት",
       baptized: true,
       date: "2024-06-13"
    },
    {
       id: 42,
       name: "አበበ ተፈራ",
       age: 36,
       badge: "deceased",
       familySize: 3,
       gender: "ወንድ",
       educationLevel: "Master Degree",
       address: "ጠረጴዛ ሰፈር",
       phoneNumber: "0934567899",
       marriege: "ያላገባ",
       membership: "ያልሆነ",
       work: "የመንግስት",
       baptized: true,
       date: "2024-04-17"
    },
    {
       id: 43,
       name: "አበበ ተፈራ",
       age: 36,
       badge: "active",
       familySize: 3,
       gender: "ወንድ",
       educationLevel: "PhD",
       address: "ጠረጴዛ ሰፈር",
       phoneNumber: "0945678912",
       marriege: "ያላገባ",
       membership: "ያልሆነ",
       work: "የመንግስት",
       baptized: true,
       date: "2024-05-15"
    },
    {
       id: 44,
       name: "አበበ ተፈራ",
       age: 36,
       badge: "inactive",
       familySize: 3,
       gender: "ወንድ",
       educationLevel: "Bachelor Degree",
       address: "ስታድየም ሰፈር",
       phoneNumber: "0945678913",
       marriege: "ያላገባ",
       membership: "ያልሆነ",
       work: "የመንግስት",
       baptized: true,
       date: "2024-02-11"
    },
    {
       id: 45,
       name: "አበበ ተፈራ",
       age: 36,
       badge: "deceased",
       familySize: 3,
       gender: "ወንድ",
       educationLevel: "PhD",
       address: "ስታድየም ሰፈር",
       phoneNumber: "0912345694",
       marriege: "ያላገባ",
       membership: "ያልሆነ",
       work: "የመንግስት",
       baptized: true,
       date: "2024-03-15"
    },
    {
       id: 46,
       name: "አበበ ተፈራ",
       age: 36,
       badge: "active",
       familySize: 3,
       gender: "ወንድ",
       educationLevel: "Master Degree",
       address: "ጠረጴዛ አካባቢ",
       phoneNumber: "0934567891",
       marriege: "ያላገባ",
       membership: "ያልሆነ",
       work: "የመንግስት",
       baptized: true,
       date: "2024-06-24"
    },
    {
       id: 47,
       name: "አበበ ተፈራ",
       age: 36,
       badge: "inactive",
       familySize: 3,
       gender: "ወንድ",
       educationLevel: "Bachelor Degree",
       address: "ጠረጴዛ አካባቢ",
       phoneNumber: "0945678915",
       marriege: "ያላገባ",
       membership: "ያልሆነ",
       work: "የመንግስት",
       baptized: true,
       date: "2024-03-24"
    },
    {
       id: 48,
       name: "አበበ ተፈራ",
       age: 36,
       badge: "deceased",
       familySize: 3,
       gender: "ወንድ",
       educationLevel: "PhD",
       address: "ጠረጴዛ አካባቢ",
       phoneNumber: "0912345695",
       marriege: "ያላገባ",
       membership: "ያልሆነ",
       work: "የመንግስት",
       baptized: true,
       date: "2024-04-19"
    },
    {
       id: 49,
       name: "አበበ ተፈራ",
       age: 36,
       badge: "active",
       familySize: 3,
       gender: "ወንድ",
       educationLevel: "Bachelor Degree",
       address: "ስታድየም አካባቢ",
       phoneNumber: "0934567894",
       marriege: "ያላገባ",
       membership: "ያልሆነ",
       work: "የመንግስት",
       baptized: true,
       date: "2024-02-21"
    },
    {
       id: 50,
       name: "አበበ ተፈራ",
       age: 36,
       badge: "inactive",
       familySize: 3,
       gender: "ወንድ",
       educationLevel: "High School",
       address: "ስታድየም ሰፈር",
       phoneNumber: "0945678916",
       marriege: "ያላገባ",
       membership: "ያልሆነ",
       work: "የመንግስት",
       baptized: true,
       date: "2024-03-22"
    },
    {
       id: 51,
       name: "አበበ ተፈራ",
       age: 36,
       badge: "deceased",
       familySize: 3,
       gender: "ወንድ",
       educationLevel: "Bachelor Degree",
       address: "ጠረጴዛ አካባቢ",
       phoneNumber: "0934567896",
       marriege: "ያላገባ",
       membership: "ያልሆነ",
       work: "የመንግስት",
       baptized: true,
       date: "2024-04-17"
    },
    {
       id: 52,
       name: "አበበ ተፈራ",
       age: 36,
       badge: "active",
       familySize: 3,
       gender: "ወንድ",
       educationLevel: "PhD",
       address: "ጠረጴዛ ሰፈር",
       phoneNumber: "0945678917",
       marriege: "ያላገባ",
       membership: "ያልሆነ",
       work: "የመንግስት",
       baptized: true,
       date: "2024-02-22"
    },
    {
       id: 53,
       name: "አበበ ተፈራ",
       age: 36,
       badge: "inactive",
       familySize: 3,
       gender: "ወንድ",
       educationLevel: "Master Degree",
       address: "ስታድየም ሰፈር",
       phoneNumber: "0912345691",
       marriege: "ያላገባ",
       membership: "ያልሆነ",
       work: "የመንግስት",
       baptized: true,
       date: "2024-06-24"
    },
    {
       id: 54,
       name: "አበበ ተፈራ",
       age: 36,
       badge: "deceased",
       familySize: 3,
       gender: "ወንድ",
       educationLevel: "Bachelor Degree",
       address: "ስታድየም አካባቢ",
       phoneNumber: "0945678918",
       marriege: "ያላገባ",
       membership: "ያልሆነ",
       work: "የመንግስት",
       baptized: true,
       date: "2024-05-24"
    },
    {
       id: 55,
       name: "አበበ ተፈራ",
       age: 36,
       badge: "active",
       familySize: 3,
       gender: "ወንድ",
       educationLevel: "Master Degree",
       address: "ጠረጴዛ አካባቢ",
       phoneNumber: "0912345692",
       marriege: "ያላገባ",
       membership: "ያልሆነ",
       work: "የመንግስት",
       baptized: true,
       date: "2024-06-25"
    },
    {
       id: 56,
       name: "አበበ ተፈራ",
       age: 36,
       badge: "inactive",
       familySize: 3,
       gender: "ወንድ",
       educationLevel: "PhD",
       address: "ስታድየም ሰፈር",
       phoneNumber: "0912345693",
       marriege: "ያላገባ",
       membership: "ያልሆነ",
       work: "የመንግስት",
       baptized: true,
       date: "2024-02-23"
    },
    {
       id: 57,
       name: "አበበ ተፈራ",
       age: 36,
       badge: "deceased",
       familySize: 3,
       gender: "ወንድ",
       educationLevel: "High School",
       address: "ጠረጴዛ ሰፈር",
       phoneNumber: "0945678920",
       marriege: "ያላገባ",
       membership: "ያልሆነ",
       work: "የመንግስት",
       baptized: true,
       date: "2024-04-25"
    },
    {
       id: 58,
       name: "አበበ ተፈራ",
       age: 36,
       badge: "active",
       familySize: 3,
       gender: "ወንድ",
       educationLevel: "Bachelor Degree",
       address: "ስታድየም ሰፈር",
       phoneNumber: "0934567891",
       marriege: "ያላገባ",
       membership: "ያልሆነ",
       work: "የመንግስት",
       baptized: true,
       date: "2024-03-25"
    },
    {
       id: 59,
       name: "አበበ ተፈራ",
       age: 36,
       badge: "inactive",
       familySize: 3,
       gender: "ወንድ",
       educationLevel: "Master Degree",
       address: "ጠረጴዛ ሰፈር",
       phoneNumber: "0945678921",
       marriege: "ያላገባ",
       membership: "ያልሆነ",
       work: "የመንግስት",
       baptized: true,
       date: "2024-04-26"
    },
    {
       id: 60,
       name: "አበበ ተፈራ",
       age: 36,
       badge: "deceased",
       familySize: 3,
       gender: "ወንድ",
       educationLevel: "PhD",
       address: "ስታድየም ሰፈር",
       phoneNumber: "0912345699",
       marriege: "ያላገባ",
       membership: "ያልሆነ",
       work: "የመንግስት",
       baptized: true,
       date: "2024-06-26"
    }
 ]
 
  

export default people;