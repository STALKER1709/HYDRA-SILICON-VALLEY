# HYDRA SILICON VALLEY — Design & Frontend Contract

## Product register
Institutional brand website for a pan-African multisector group based in Cameroon. Primary audiences: partners, investors, talent, institutions and prospective collaborators. Primary job: explain the group and its ecosystem, establish credibility, and make contact easy.

## Visual direction
- Preserve the approved desktop and mobile reference screenshots as the source of truth. Do not invent a new layout or replace approved assets without explicit approval.
- Brand palette: deep forest green `#092D16`, corporate green `#155B25`, bright green `#2E8A37`, gold `#C9A84C`, ink `#111A12`, paper `#F7F8F4`.
- Geonowa is the display/brand typeface. Keep body copy readable and restrained.
- The Africa artwork in the Hero is a supporting second-plane element: behind the heading, lowered below its central axis, fully opaque and darkened as approved.
- The layered footer wave is a signature detail. Keep it continuous and respect reduced-motion preferences.
- Avoid gratuitous cards, gradients, animations or decorative effects that are not present in the references.

## Layout and responsive rules
- Desktop-first fidelity to the supplied references; adapt gracefully through tablet and mobile breakpoints.
- No horizontal overflow at 320px and above.
- Maintain clear heading hierarchy, consistent section spacing and readable line lengths.
- Keep image aspect ratios stable to avoid layout shift.
- Interactive targets should be at least 44px where practical.

## Behavior and accessibility
- French is the default language; English is available. Persist the user's language and theme preference locally when storage is available.
- Mobile navigation must expose its expanded state, have a changing accessible name and be keyboard operable.
- All controls require visible focus indicators and meaningful accessible names.
- Respect `prefers-reduced-motion` globally.
- Do not claim the contact form sends messages server-side: the current implementation opens the visitor's email application with a prefilled message. A real web submission requires a separately configured and tested mail service.
- Maintain sufficient text contrast in both themes.

## Assets and performance
- Prefer versioned local assets under `/ressources` and `/public`. External asset URLs are exceptions and should be minimized.
- Use lazy loading for below-the-fold imagery, but never lazy-load the primary Hero visual.
- Provide image dimensions/aspect ratios when known; do not guess source dimensions.
- Avoid adding dependencies for behavior that can be implemented natively and robustly.

## Verification gate
Before considering a change complete:
1. Run the production build.
2. Check desktop, tablet and mobile layouts, including 320px width.
3. Check both themes and both languages.
4. Check keyboard navigation, visible focus, reduced motion and form behavior.
5. Confirm every referenced asset exists on the deployed branch.
6. Keep work on a feature branch until the user explicitly approves integration into `main`.
