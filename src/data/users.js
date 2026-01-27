export const UsersTableHeadTitle = [
  "شناسه",
  "نام کاربری",
  "نام خانوادگی",
  "شماره موبایل",
  "آدرس ایمیل",

  "نقش کابر",
  "تصویر",
  "عملیات",
];
export const LastUsersTableHeadTitle = [
  "شناسه",
  "نام کاربری",
  "نام خانوادگی",
  "نقش کابر",
  "عملیات",
];
const userRoles = [
  {
    label: "کاربر",
    value: "USER",
  },
  {
    label: "مدیر",
    value: "ADMIN",
  },
  {
    label: "پشتیبانی",
    value: "SUPPORT",
  },
];
const STATIC_PRODUCT_IMAGE = "./public//images/user-1.jpg";
const STATIC_PRODUCT_DESCRIPTION =
  "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است،";

export const users = [
  {
    id: 1,
    userName: "peyman-geek",
    fullName: "پیمان احمدی",
    phoneNumber: "09911871596",
    email: "peymangeek@gmail.com",
    description: STATIC_PRODUCT_DESCRIPTION,

    role: userRoles[1].label,
    profile: STATIC_PRODUCT_IMAGE,
  },
  {
    id: 2,
    userName: "Reza2",
    fullName: "رضا احمدی",
    phoneNumber: "09129876543",
    email: "reza2@example.com",
    description: STATIC_PRODUCT_DESCRIPTION,

    role: userRoles[0].label,
    profile: STATIC_PRODUCT_IMAGE,
  },
  {
    id: 3,
    userName: "Mohammad3",
    fullName: "محمد حسینی",
    phoneNumber: "09121234567",
    email: "mohammad3@example.com",
    description: STATIC_PRODUCT_DESCRIPTION,

    role: userRoles[2].label,
    profile: STATIC_PRODUCT_IMAGE,
  },
  {
    id: 4,
    userName: "Zahra4",
    fullName: "زهرا رضایی",
    phoneNumber: "09123456789",
    email: "zahra4@example.com",
    description: STATIC_PRODUCT_DESCRIPTION,

    role: userRoles[0].label,
    profile: STATIC_PRODUCT_IMAGE,
  },
  {
    id: 5,
    userName: "Sara5",
    fullName: "سارا مرادی",
    phoneNumber: "09127654321",
    email: "sara5@example.com",
    description: STATIC_PRODUCT_DESCRIPTION,

    role: userRoles[1].label,
    profile: STATIC_PRODUCT_IMAGE,
  },
  {
    id: 6,
    userName: "Amir6",
    fullName: "امیر جلالی",
    phoneNumber: "09125553322",
    email: "amir6@example.com",
    description: STATIC_PRODUCT_DESCRIPTION,

    role: userRoles[2].label,
    profile: STATIC_PRODUCT_IMAGE,
  },
  {
    id: 7,
    userName: "Ali7",
    fullName: "علی رضایی",
    phoneNumber: "09121112233",
    email: "ali7@example.com",
    description: STATIC_PRODUCT_DESCRIPTION,

    role: userRoles[0].label,
    profile: STATIC_PRODUCT_IMAGE,
  },
  {
    id: 8,
    userName: "Reza8",
    fullName: "رضا محمدی",
    phoneNumber: "09123334455",
    email: "reza8@example.com",
    description: STATIC_PRODUCT_DESCRIPTION,

    role: userRoles[1].label,
    profile: STATIC_PRODUCT_IMAGE,
  },
  {
    id: 9,
    userName: "Mohammad9",
    fullName: "محمد جلالی",
    phoneNumber: "09124445566",
    email: "mohammad9@example.com",
    description: STATIC_PRODUCT_DESCRIPTION,

    role: userRoles[2].label,
    profile: STATIC_PRODUCT_IMAGE,
  },
  {
    id: 10,
    userName: "Zahra10",
    fullName: "زهرا احمدی",
    phoneNumber: "09129998877",
    email: "zahra10@example.com",
    description: STATIC_PRODUCT_DESCRIPTION,

    role: userRoles[0].label,
    profile: STATIC_PRODUCT_IMAGE,
  },
  {
    id: 11,
    userName: "Sara11",
    fullName: "سارا محمدی",
    phoneNumber: "09126667788",
    email: "sara11@example.com",
    description: STATIC_PRODUCT_DESCRIPTION,

    role: userRoles[2].label,
    profile: STATIC_PRODUCT_IMAGE,
  },
  {
    id: 12,
    userName: "Amir12",
    fullName: "امیر رضایی",
    phoneNumber: "09127778899",
    email: "amir12@example.com",
    description: STATIC_PRODUCT_DESCRIPTION,

    role: userRoles[0].label,
    profile: STATIC_PRODUCT_IMAGE,
  },
  {
    id: 13,
    userName: "Ali13",
    fullName: "علی حسینی",
    phoneNumber: "09128889900",
    email: "ali13@example.com",
    description: STATIC_PRODUCT_DESCRIPTION,

    role: userRoles[1].label,
    profile: STATIC_PRODUCT_IMAGE,
  },
  {
    id: 14,
    userName: "Reza14",
    fullName: "رضا مرادی",
    phoneNumber: "09123332211",
    email: "reza14@example.com",
    description: STATIC_PRODUCT_DESCRIPTION,

    role: userRoles[2].label,
    profile: STATIC_PRODUCT_IMAGE,
  },
  {
    id: 15,
    userName: "Mohammad15",
    fullName: "محمد احمدی",
    phoneNumber: "09121119900",
    email: "mohammad15@example.com",
    description: STATIC_PRODUCT_DESCRIPTION,

    role: userRoles[0].label,
    profile: STATIC_PRODUCT_IMAGE,
  },
  {
    id: 16,
    userName: "Zahra16",
    fullName: "زهرا حسینی",
    phoneNumber: "09129997766",
    email: "zahra16@example.com",
    description: STATIC_PRODUCT_DESCRIPTION,

    role: userRoles[2].label,
    profile: STATIC_PRODUCT_IMAGE,
  },
  {
    id: 17,
    userName: "Sara17",
    fullName: "سارا رضایی",
    phoneNumber: "09127775544",
    email: "sara17@example.com",
    description: STATIC_PRODUCT_DESCRIPTION,

    role: userRoles[0].label,
    profile: STATIC_PRODUCT_IMAGE,
  },
  {
    id: 18,
    userName: "Amir18",
    fullName: "امیر محمدی",
    phoneNumber: "09125556677",
    email: "amir18@example.com",
    description: STATIC_PRODUCT_DESCRIPTION,

    role: userRoles[1].label,
    profile: STATIC_PRODUCT_IMAGE,
  },
  {
    id: 19,
    userName: "Ali19",
    fullName: "علی جلالی",
    phoneNumber: "09124443322",
    email: "ali19@example.com",
    description: STATIC_PRODUCT_DESCRIPTION,

    role: userRoles[0].label,
    profile: STATIC_PRODUCT_IMAGE,
  },
  {
    id: 20,
    userName: "Reza20",
    fullName: "رضا محمدی",
    phoneNumber: "09126665544",
    email: "reza20@example.com",
    description: STATIC_PRODUCT_DESCRIPTION,

    role: userRoles[2].label,
    profile: STATIC_PRODUCT_IMAGE,
  },
];
