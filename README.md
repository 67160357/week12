# Web Development Lab — GitHub Actions + GitHub Pages

เว็บไซต์ตัวอย่างสำหรับทำแลป มี About Me, Skills, Contact, ปุ่ม Say Hello และ Toggle Theme พร้อม Workflow สำหรับ Deploy อัตโนมัติ

## ก่อนส่งงาน
1. แก้ชื่อและรหัสนิสิตใน `index.html`
2. ตรวจสอบว่า Repository ใช้ branch `main`
3. ที่ GitHub ไปที่ **Settings → Pages → Build and deployment → Source** แล้วเลือก **GitHub Actions**
4. Push โค้ดขึ้น branch `main` และรอ Workflow ในแท็บ **Actions** ให้สำเร็จ

## คำสั่ง Git
```bash
git init
git branch -M main
git add .
git commit -m "Create starter website"
git remote add origin https://github.com/YOUR_USERNAME/webdev-actions-lab.git
git push -u origin main
```

หาก Repository มีไฟล์หรือ commit อยู่แล้ว ให้ clone Repository ก่อนแทนการเริ่ม `git init` ใหม่

## อัปเดตเว็บไซต์
```bash
git add .
git commit -m "Update website"
git push origin main
```

GitHub Pages ให้บริการ Static HTML/CSS/JavaScript เท่านั้น ไม่ได้รัน PHP/MySQL ฝั่ง Server
