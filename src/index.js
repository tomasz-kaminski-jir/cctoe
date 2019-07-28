// Translates 'a' to '🇦', 'b' to '🇧' and so on.
function letterToLetterEmoji(letter) {
  return String.fromCodePoint(letter.toLowerCase().charCodeAt() + 127365);
}

// Translates 'pl' to 'PL', 'en-US' to 'US' and so on.
function countryCodeToCountry(countryCode) {
  return countryCode.split('-').pop().toUpperCase();
}

// Translates 'pl-PL' to 🇵🇱 and so on.
export default function countryCodeToFlagEmoji(str) {
  if (!str) {
    return str;
  }

  return Array.from(countryCodeToCountry(str)).map(letterToLetterEmoji).join('');
}
