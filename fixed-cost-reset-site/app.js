const currency = new Intl.NumberFormat("ja-JP");

const form = document.querySelector("#diagnosisForm");
const savingAmount = document.querySelector("#savingAmount");
const resultMessage = document.querySelector("#resultMessage");
const clickCount = document.querySelector("#clickCount");
const modal = document.querySelector("#waitlistModal");
const waitlistForm = document.querySelector("#waitlistForm");
const formNote = document.querySelector("#formNote");
const clickStorageKey = "fixedCostResetClicks:v1";

const labels = {
  mobile: "スマホ料金",
  energy: "電気・ガス",
  internet: "ネット回線",
  subscription: "サブスク整理"
};

const state = {
  clicks: Number(localStorage.getItem(clickStorageKey) || 0)
};

function updateClickCount() {
  clickCount.textContent = String(state.clicks);
  localStorage.setItem(clickStorageKey, String(state.clicks));
}

function trackClick(event) {
  const target = event.target.closest("[data-track]");
  if (!target) return;
  state.clicks += 1;
  updateClickCount();
}

function updateDiagnosis() {
  const checked = [...form.querySelectorAll("input[name='cost']:checked")];
  const total = checked.reduce((sum, input) => sum + Number(input.dataset.saving), 0);
  const selectedLabels = checked.map((input) => labels[input.value]);

  savingAmount.textContent = `月${currency.format(total)}円`;

  if (checked.length === 0) {
    resultMessage.textContent = "当てはまる項目を選ぶと、最初に見直すべき項目が表示されます。";
    return;
  }

  const first = selectedLabels[0];
  const rest = selectedLabels.length > 1 ? `、次に${selectedLabels.slice(1).join("、")}` : "";
  resultMessage.textContent = `最初は${first}${rest}を見直すのがよさそうです。比較記事を作るなら、この反応が強い項目から広げます。`;
}

function openModal() {
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  const input = modal.querySelector("input");
  input.focus();
}

function closeModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
}

document.addEventListener("click", trackClick);

document.querySelectorAll("[data-modal-open]").forEach((button) => {
  button.addEventListener("click", openModal);
});

document.querySelectorAll("[data-modal-close]").forEach((button) => {
  button.addEventListener("click", closeModal);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("is-open")) {
    closeModal();
  }
});

form.addEventListener("change", updateDiagnosis);

waitlistForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formNote.textContent = "登録意欲を確認しました。実運用ではここでメール配信や決済ページに接続します。";
  waitlistForm.reset();
});

updateClickCount();
updateDiagnosis();
