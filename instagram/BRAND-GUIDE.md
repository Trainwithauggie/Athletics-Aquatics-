# Instagram Carousel Brand Guide — Athletics & Aquatics Training

Goal of every carousel: **get saved and shared by people who don't follow you yet.**
Saves and shares are what push a post to non-followers; the last slide turns that reach into follows.

---

## 1. The brand kit (same as the website)

| Token | Hex | Use |
|---|---|---|
| Black | `#000000` | Background, always |
| Cream | `#F4F1EA` | Body text |
| Pale yellow | `#F2E4A6` | Emphasised words (*italic*), big numbers |
| Gold | `#C9A24A` | Tags, outlines, small accents — never body text |
| Sage | `#7E9B74` | Buttons, checkmarks, "fact" boxes, wave line |
| Muted | `#A9A6A0` | Sub-headings, captions |

- **Headlines:** Fraunces SemiBold. Put **one** key phrase per headline in *italic pale yellow*.
- **Body:** Work Sans, at least 38px on a 1080px slide (readable on a phone).
- **Fixed on every slide:** lane-rope stripe at the top, topic tag + `01 / 07` counter, wave line, logo footer, "swipe →".
- **Size:** 1080 × 1350 (4:5 portrait). It takes up the most screen space in the feed.

## 2. The 7 slide layouts (all in `carousel-template.html`)

| Layout | Class | Use it for |
|---|---|---|
| Cover | `cover` | Slide 1. The hook + your face. |
| Point | `point` | One tip per slide, big outlined number. |
| Stat | `stat` | One striking number ("7,700 kcal"). |
| Myth vs Fact | `myth` | Correcting a common belief. Very shareable. |
| List | `list` | Recap / checklist. The slide people **save**. |
| Quote | `quote` | Client testimonial = proof. |
| CTA | `cta` | Last slide. Ask for the follow. |

## 3. The structure that grows followers

1. **Hook (slide 1)** — promise a specific outcome to a specific person. Formulas that work:
   - "Lose fat *without* living in the gym."
   - "3 swim mistakes that make you tired after 1 lap."
   - "Busy parent? Here's a 30-min workout that *actually* works."
   - "Stop doing this in the pool."
2. **Value (slides 2–5)** — one idea per slide, max ~25 words of body text.
3. **Save slide (second-last)** — a checklist or summary worth coming back to.
4. **Proof (optional)** — a testimonial from the website.
5. **CTA (last slide)** — tell them *why* to follow: "Follow @auggie_goh for no-fluff tips for busy parents." Add save / send prompts.

Keep it to **6–10 slides**. Every slide should make the reader want the next one.

## 4. Content pillars (rotate weekly)

| Pillar | Example carousels |
|---|---|
| Strength for busy parents | 30-min full-body session · Protein made simple · Training at home with 1 dumbbell |
| Swimming (all ages) | Freestyle breathing fixes · Kids' first lesson checklist · Why adults sink & how to float |
| Nutrition | The hand-portion method · How to find your TDEE · 5 easy high-protein breakfasts |
| Proof & story | Client transformation · "Why I coach" · A day of coaching |

Your website articles already give you 4+ carousels — turn each one into a post.

## 5. Caption template

```
[Repeat the hook in one line]

[2–3 lines of extra context or a personal story]

💾 Save this for your next session
📩 Send it to a parent who needs it
➡️ Follow @auggie_goh for strength & swim tips

Free online consultation (PT) / free swim assessment — link in bio.

#personaltrainer #swimcoach #fatloss #busyparents #learntoswim #strengthtraining
```

## 6. Posting routine

- 2–3 carousels a week, same days and time each week.
- Reply to every comment in the first hour.
- Share each carousel to your Story with a poll or question sticker.
- Check **Insights → Saves, Shares, Follows** per post. Make more of whatever wins.

## 7. How to make a new post

**No-code way:** open `carousel-template.html` in Chrome → click any text to edit it → press **Download all slides (PNG)** → upload the images to Instagram in order.

**To add or remove slides:** copy or delete a `<section class="slide …">…</section>` block in the HTML. Counters update themselves.

**Command-line export (sharpest result):** `node export.js my-post.html` saves the PNGs to `export/`.

Tip: keep `carousel-template.html` as the master copy. Save each new post as its own file, e.g. `2026-11-swim-breathing.html`.
