## Setup

### 1. Environment Variables

คัดลอกไฟล์ตัวอย่างแล้วตั้งค่า environment variables ที่จำเป็น

```bash
cp .env.example .env
```

จากนั้นแก้ไขไฟล์ `.env` และกำหนดค่าต่อไปนี้:

- `DATABASE_URL` – PostgreSQL connection string (เช่น Supabase)
- `PAYLOAD_SECRET` – secret key สำหรับ Payload (แนะนำให้สุ่มค่าใหม่)
- `S3_BUCKET` – ชื่อ Supabase Storage bucket
- `S3_ACCESS_KEY_ID` / `S3_SECRET_ACCESS_KEY` – S3 access keys
- `S3_ENDPOINT` / `S3_REGION` – ค่า S3-compatible endpoint ของ Supabase

> ℹ️ โปรเจกต์นี้ใช้ **Supabase Postgres** และ **Supabase Storage (S3-compatible)**

---

### 2. Install Dependencies

ติดตั้ง dependencies ทั้งหมดด้วย npm

```bash
npm install
```

> ต้องใช้ Node.js เวอร์ชัน `>= 18.20`

---

### 3. Database Migration

รัน Payload migrations เพื่อสร้าง schema ของโปรเจกต์

```bash
npm run db:migrate
```

- คำสั่งนี้จะสร้างหรืออัปเดตเฉพาะตารางของ Payload
- จะไม่ลบหรือกระทบตารางอื่นที่มีอยู่ในฐานข้อมูล

เหมาะสำหรับใช้งานกับฐานข้อมูลที่มีตารางจากระบบอื่นอยู่แล้ว

---

### 4. Run the Project

เริ่มรันโปรเจกต์ในโหมด development

```bash
npm run dev
```

จากนั้นเปิดเบราว์เซอร์ที่:

```
http://localhost:3000/admin
```

เพื่อเข้าใช้งาน Payload Admin UI
